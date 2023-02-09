const state = {
    a: 'apple',
    b: 'banana',
    c: 'city',
    d: 'dom',
    e: 'end',
    f: 'forEach',
    g: 'gold'
};

function makeDrop(){
    let dropDown = document.createElement('div');
    let selectKey = document.createElement('select');
    let selectvalue = document.createElement('select');
    let Cstate = {}
    function createDorpDown(){
        for(let i in state){
            Cstate[state[i]] = i;
            let keyOp = document.createElement('option');
            let valueOp = document.createElement('option');
            // console.log(i);
            keyOp.value = keyOp.innerHTML = i;
            valueOp.value = valueOp.innerHTML = state[i];
            selectKey.append(keyOp);
            selectvalue.append(valueOp);
        }
        dropDown.appendChild(selectKey);
        dropDown.appendChild(selectvalue);
    }
    createDorpDown();
    document.body.appendChild(dropDown);
    selectKey.onchange = (event)=>{
        let newValue = state[event.target.value];
        selectvalue.value = newValue;
    }
    selectvalue.onchange = (event)=>{
        let newValue = Cstate[event.target.value];
        selectKey.value = newValue;
    }
}
makeDrop();