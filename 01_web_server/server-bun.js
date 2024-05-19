import {serve} from 'bun'
import { URL } from 'url'

serve({
    fetch(request){
        const url = new URL(request.url)
        if(url.pathname==='/'){
            return new Response('hello world',{status:200})
        }else if(url.pathname==='/user'){
            return new Response('welcome user to learn bun js',{status:200})
        }else{
            return new Response('page not found',{status:400})
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})