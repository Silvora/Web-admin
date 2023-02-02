import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enGB from 'ant-design-vue/es/locale/en_GB';

/**
 * 
 * @param langue zh en
 * @returns 
 */
export function setLangue(langue:string){
    if(langue == "zh"){
        return zhCN
    }

    if(langue == "en"){
        return enGB
    }
}

