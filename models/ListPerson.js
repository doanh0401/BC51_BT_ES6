export class ListPerson {
    arr = [];

    Add = (person) => {
        this.arr = [...this.arr,person];
    };

    Delete = (id) => {
        const index = this.arr.findIndex(()=> {
            return this.arr.id === id;
        });
        this.arr.splice(index,1);
    }
    update = (person) => {
        const index = this.arr.findIndex((element) => {
            return element.id === person.id;
        });
        
        this.arr[index] = person;
    }
    filter = (typeJob) => {
        return this.arr.filter((element) => {
            if(typeJob === "All") return true;
            return element.typeJob === typeJob;
        })
    }
    findById = (id) => {
        return this.arr.find((element) => {
            return element.id === id;
        });
    }
    findByName = (name) => {
        return this.arr.find((element) => {
            return element.name === name;
        });
    }
}