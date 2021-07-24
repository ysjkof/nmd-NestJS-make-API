// 서비스를 받을 class(interface)를 export한다.
// 강의에서는 JavaScript object를 쓴다.
// 실제는 untities에 데이터베이스의 모델을 만들어야 한다.

export class Movie{
    id:number;
    title:string;
    year:number;
    genres:string[];

}