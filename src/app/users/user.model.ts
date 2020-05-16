
    export interface User {
        cd_usuario: string;
        nm_usuario: string;
        nome: string;
        avatar: string;
    }

    export interface RequestCreate { 
        nm_usuario: string;
        nome: string;
        avatar: string;
    }

    //Getuser

    export interface RequestUser { 
        cd_usuario: string;
        nm_usuario: string;
        nome: string;
        avatar: string; 
    }



  //Update 
    export interface RequestUpdate { 
        nm_usuario: string;
        nome: string;
        avatar: string;
    }

    export interface ResponseCreate { 
        nm_usuario: string;
        nome: string;
        avatar: string;
        cd_usuario: string;
    }

