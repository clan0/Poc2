const IBridgeToken = artifacts.require("IBridgeToken");

contract("IBridgeToken", (accounts) => {

    const contract_Address = "0x9f7ea856ba1fb88d35e000c45e75f134a756ac4f";
                      
    const wallet_addr = "0x70aF29f754988473fcAbA6E01AbfbafF871046d1"

    

   /* it("get balance", async() => {

        const bridgeToken =  await IBridgeToken.at(contract_Address);
        console.log(`${bridgeToken}`);
        const balance =  await bridgeToken.balanceOf(wallet_addr);
        
        console.log(`${balance}`);
   

       
       
})

*/

it("initializes", async () =>{
        
   const bridgeToken = await IBridgeToken.at(contract_Address);

   console.log("-----------proxy adddress---------------")
   console.log(contract_Address);

   // 
   console.log("-----------balance before initialize---------------")
   const balance =  await bridgeToken.balanceOf(wallet_addr);
        
   console.log(`${balance}`);

   await bridgeToken.initialize({from : wallet_addr});
   await bridgeToken.mint(wallet_addr, 10000000, {from: wallet_addr});

   console.log("-----------balance after initialize---------------")
   const balance_ =  await bridgeToken.balanceOf(wallet_addr);
   console.log(`${balance_}`);

   console.log("-----------balance after burning---------------")
   await bridgeToken.burn(wallet_addr, 10000000, {from: wallet_addr})
   const balance__=  await bridgeToken.balanceOf(wallet_addr);
   console.log(`${balance__}`);
   
   

  })


})