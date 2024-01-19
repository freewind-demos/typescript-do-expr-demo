
function doExpr<T>(fn: () => T): T {
    return fn();
}

async function main() {
    console.log(doExpr(() => 1 + 1));
    console.log(await doExpr(async () => 1 + 1));
}

main().catch(console.error)
