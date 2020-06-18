import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: 'http://www.yunfc.net:8020/api/object/paging',
        method: 'post',
        headers:{
            "Content-Type": "application/json",
            "X-Token": "2af93fc5688349e0b92cd61b3205ac9a"
        },
        params: query,
        data:{
                "model":"sale.order",
                "action": "search_read",
                "conditions": [[["company_id","=",1],["state","=","sale"]]],
                "options": {
                 "fields": ["id", "name", "user_id", "state", "amount_total", "date_order"],
                 "order": "id asc"
                }
            }
    });
};
