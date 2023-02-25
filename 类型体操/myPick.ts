interface User {
    id: number;
    name: string;
    password: string;
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
    // P in K 相当于for in语法
}

type mypicker = MyPick<User, "id" | "name">;