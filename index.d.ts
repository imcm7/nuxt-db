
// Pass the problem

declare module 'vue-router' {
    interface RouteMeta {
        title?: string | number;
    }
}


// No effect 

declare module '#app' {
     interface PageMeta {
         title?: string | number;
     }

     interface RouteMeta {
         title?: string | number;
     }

}

export {};
