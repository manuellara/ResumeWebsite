import Api from '@/services/Api'


// exporting an object with a method that calls the endpoint
export default {
    rsstojson() {
        return Api().get('/api/rsstojson')
    }
}