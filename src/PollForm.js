import React, { useState } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const PollForm=()=>{
    const [ques,setQues]=useState('');

    var optionObj = [
        {
            index: 1,
            value: "",
        },
        {
        index : 2,
        value: ""
        }
    ]
    const [options, setOptions] = useState(optionObj)

    const changeOptionValue = (e, index) => {
        let newArr = [...options];
        newArr[index-1].value = e.target.value;
        setOptions(newArr);
    }

    const addOption = () => {
        let newArr = [...options];
        newArr.push({
            index : options.length + 1,
            value : "",
        })
        setOptions(newArr);
    }

    const submitHandler = () => {
        // connection with backend
    }

    return(
        <div>           
                <div style={{width:"50%",margin:"auto"}}>
                <h1>Your Question *</h1>
                <TextArea
                    value={ques}
                    onChange={(e)=>setQues(e.target.value)}
                    placeholder="Add question"
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    showCount 
                    maxLength={100}
                />
                {options.map((option) => {
                    return(
                        <div>
                            <h1>Option {option.index} *</h1>
                            <TextArea
                                value={option.value}
                                onChange={(e) => changeOptionValue(e, option.index)}
                                placeholder="Add option"
                                showCount 
                                maxLength={100}
                            />
                        </div>
                    )
                })}
                <br></br>
                <Button 
                    type="primary"
                    onClick={addOption}
                >
                    + Add Option
                </Button>
                {/* <Button 
                type="primary"
                style={{marginTop:"10px"}}
                onClick={submitHandler}>Submit</Button> */}

            </div>
        </div>
    )
}
export default PollForm;