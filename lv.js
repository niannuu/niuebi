async function batchRun(){
    //await sleep(600 * 1000)
    while(true){
        for(let i = 0; i < keyPairs.length; i++){
            const privateKey = keyPairs[i].privateKey;
            const accountAddress = keyPairs[i].address;
            const index = keyPairs[i].index
            try{
                console.log("第", i, "个...")
                //await sleep(30 * 1000)
                await mint(index, privateKey, accountAddress)
                await sleep(10 * 1000)
                //await jediswapSwap(index, privateKey, accountAddress)
            }
            catch(e){
                console.log(e.message)
                await sleep(1 * 1000)
                //fs.appendFileSync("stone.log", `❌ ${index} ${accountAddress}\n`)
            }
        }
    }
}

batchRun()
