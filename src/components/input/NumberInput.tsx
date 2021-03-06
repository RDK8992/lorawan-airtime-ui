import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { withFormControl } from './helpers';

type NumberInputProps = {
  min?: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

/**
 * A Bootstrap form input field with decrement and increment buttons.
 */
export default function NumberInput({min = 0, value, setValue}: NumberInputProps) {

  function useParam<T>(defaultValue: T) {
    const [value, setValue] = useState(defaultValue);
    return {value, setValue};
  }

  function dec() {
    if (value > min) {
      setValue(value - 1);
    }
  }

  function inc() {
    setValue(v => v + 1);
  }

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button onClick={dec} variant="outline-secondary">-</Button>
      </InputGroup.Prepend>
      <FormControl {...withFormControl({value, setValue})} type="number" min={min} placeholder="Enter number"
                   aria-label="Number" />
      <InputGroup.Append>
        <Button onClick={inc} variant="outline-secondary">+</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
