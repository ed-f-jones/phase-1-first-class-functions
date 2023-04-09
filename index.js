const receivesAFunction = (spyRoutine) => {
    spyRoutine()
}

const spyRoutine = (creep) => {
    return `${creep}`
}


const returnsANamedFunction =  () => {
    return function whosBad() {
        
    }
}

const returnsAnAnonymousFunction = () => () => {};
