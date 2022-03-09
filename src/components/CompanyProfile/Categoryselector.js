import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Categoryselector = ({setCategory,companies}) => {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
  {companies?.map(company=><Button className='mx-2' onClick={()=>setCategory(company?.industry)} variant="primary">{company?.industry}</Button>)}
</ButtonGroup>
        </div>
    );
};

export default Categoryselector;