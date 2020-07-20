import Api from '@/services/Api'


// exporting an object with a method that calls the endpoint
export default {
    // function to take a JSON object as argument
    rsstojson(user) {
        return Api().post('/api/rsstojson', user)
    }
}