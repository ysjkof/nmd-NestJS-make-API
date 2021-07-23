import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// 'movies'가 기본 라우터가 된다. 아래처럼 @Get()이 인자가 없으면 루트로 가는데 그러면 경로는 /movies가 된다.
@Controller('movies')
export class MoviesController {
    // @Get, @Post 등을 decorator라 한다.
    @Get()
    getAll(){
        return "This will return all movies";
    }
    @Get("search")
    search(@Query("year") seachingYear:string){
        return `We are searching for a movie made after: ${seachingYear}`;
    }

    @Get(":id")
    // getOne에게 필요한 게 있어서 요청한다. URL에 파라미터 id를 찾고 싶다. @Param()으로 id를 요청한다.
    // NestJS는 요청하지 않으면 아무것도 return하지 않는다.
    getOne(@Param("id") movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }
    @Post()
    // @Body는 request의 body를 가져온다.
    create(@Body() movieDate){
        return movieDate;
    }

    @Delete(":id")
    remoev(@Param("id") movieId:string){
        return `This will delete one movie with the id: ${movieId}`;
    }

    // update 기능. put은 모든 리소스를 업데이트 한다. patch는 리소스의 일부만 업데이트한다.
    @Patch(':id')
    patch(@Param("id") movieId:string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }

    
}
