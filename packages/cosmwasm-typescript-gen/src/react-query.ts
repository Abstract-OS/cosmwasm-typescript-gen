import { pascal } from "case";
import { header } from './header';
import { join } from "path";
import { sync as mkdirp } from "mkdirp";
import * as w from 'wasm-ast-types';
import * as t from '@babel/types';
import { writeFileSync } from 'fs';
import generate from "@babel/generator";
import { findAndParseTypes, findQueryMsg } from "./utils";

export default async (name: string, schemas: any[], outPath: string) => {

    const ReactQueryFile = pascal(`${name}Contract`) + '.react-query.ts';
    const Contract = pascal(`${name}Contract`)

    const QueryMsg = findQueryMsg(schemas);
    const typeHash = await findAndParseTypes(schemas);

    let QueryClient = null;
    let ReadOnlyInstance = null;

    const body = [];

    body.push(
        w.importStmt(['useQuery', 'UseQueryOptions'], '@tanstack/react-query')
    );

    body.push(
        w.importStmt(Object.keys(typeHash), `./${Contract}`)
    );

    // query messages
    if (QueryMsg) {

        QueryClient = pascal(`${name}QueryClient`);
        ReadOnlyInstance = pascal(`${name}ReadOnlyInterface`);

        body.push(
            w.importStmt([QueryClient], `./${Contract}`)
        );

        [].push.apply(body,
            w.createReactQueryHooks(
                QueryMsg,
                name,
                QueryClient
            )
        );

    }

    const code = header + generate(
        t.program(body)
    ).code;

    mkdirp(outPath);
    writeFileSync(join(outPath, ReactQueryFile), code);
};
