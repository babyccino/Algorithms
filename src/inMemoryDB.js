var db = {};

function solution(queries) {
    for (const q of queries) {
        const query = q[0];
        console.log(query);
        const key = q[1];
        const field = q[1];
        const value = q[1];
        switch(query) {
        case "SET":
            if (!db[key]) {
                db[key] = {};
            }
            
            db[key][field] = value;
            return "";
        case "GET":
            if (!db[key]) {
                return "";
            } else {
                return db[key][field];
            }
        case "DELETE":
            if (!db[key] || db[key][field] === undefined || db[key][field] === null) {
                return false;
            }
            
            delete db[key][field];
            return true;
        }
    }
}

const input = [["SET","employee1","city","Annapolis"], 
["SET","employee2","id","0123"], 
["GET","employee1","city"]];

console.log(solution(input));