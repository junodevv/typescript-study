// loockup
interface Car{
    id: number;
    name: string;
    brand:{
        popularity: number;
        logo: string;
        history: number;
    }
}
function updateCarBrand(id: Car['id'], newBrand: Car['brand']){

}

// 다른방식
type CarId = number;

interface CarBrand{
    popularity: number;
        logo: string;
        history: number;
}

function updateCarBrand2(id: CarId, newBrand: CarBrand){

}