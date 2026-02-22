import { get, post } from '@/utils/request';

export const adminApi ={

    /** 添加管理员 
     * @param data 管理员信息
     * @returns 管理员信息
     */
    add:(data:any) => {
        return post('/admin/add',data);
    },

    /** 更新管理员 
     * @param data 管理员信息
     * @returns 管理员信息
     */
    update:(data:any) => {
        return post('/admin/update',data);
    },

    /** 删除管理员 
     * @param data 管理员信息
     * @returns 管理员信息
     */
    delete:(id:any) => {
        return post('/admin/del?id='+ id ,{});
    },

    queryPageList:(data:any,pageNum:any,pageSize:any) =>{
        return post('/admin/list?pageNum='+pageNum+'&pageSize='+pageSize,data);
    }
}
