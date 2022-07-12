//% color="#4571df" iddconWidth=50 iconHeight=40
namespace bme280{

    //% block="BME280 begin while success" blockType="command" 
    export function bme280_init(parameter: any, block: any) {

        Generator.addImport("from pinpong.libs.dfrobot_bme280 import BME280");
        Generator.addCode("bme280 = BME280()");
   
    }


    //% block="BME280  read [DAT] in data" blockType="reporter" 
    //% DAT.shadow="dropdown"  DAT.options="DAT"
    export function bme280_read_data(parameter: any, block: any) { 
        let dat=parameter.DAT.code;
        Generator.addCode( [`bme280.${dat}()`,Generator.ORDER_UNARY_POSTFIX]);
   
   }
   

   
}