//Child Process
//child process module is node module which is used to create sub procces inside a script
//child process help to access ecternal process

const cp = require('child_process')     //importing module

// console.log("Trying to open calculator with child process")

// cp.execSync('open -a Calculator')
// cp.execSync('open -a Chess')

// let txt = cp.execSync('node test.js')
// console.log("Output is : " + txt)

cp.execSync('open -a Firefox https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_4d1ohbptwj_e&adgrpid=58490306106&hvpone=&hvptwo=&hvadid=486457318205&hvpos=&hvnetw=g&hvrand=18066637903619493144&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007780&hvtargid=kwd-298187295805&hydadcr=5657_2175734&gclid=CjwKCAjww8mWBhABEiwAl6-2RTRJFVbJaGqi-1Y4VwVTMNOEesyE66GzcTWXi83UngKL4Dt41f8__hoCCuoQAvD_BwE')
cp.execSync('open -a Firefox')

// console.log('Calculater opended')
