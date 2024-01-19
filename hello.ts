type Fun = (...args: any[]) => any;
function doExpr<T extends Fun>(fn: T): ReturnType<T> {
    return fn();
}

async function main() {
    console.log(doExpr(() => 1 + 1));
    console.log(await doExpr(async () => 1 + 1));
}

main().catch(console.error)
