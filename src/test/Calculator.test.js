import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Calculator from "../components/Calculator";

describe("Testes para a calculadora 1", () => {
  test("Deve renderizar o button + ", () => {
    render(<Calculator />);

    const plus = screen.getByText("+");

    expect(plus).toBeInTheDocument();
  });

  test("Deve renderizar o button - ", () => {
    render(<Calculator />);

    const minus = screen.getByText("-");

    expect(minus).toBeInTheDocument();
  });

  test("Deve renderizar o button *", () => {
    render(<Calculator />);

    const multiply = screen.getByText("*");

    expect(multiply).toBeInTheDocument();
  });

  test("Deve renderizar o button /", () => {
    render(<Calculator />);

    const division = screen.getByText("/");

    expect(division).toBeInTheDocument();
  });

  test("Ao clicar nos dígitos a multiplicação 5 * 2, deve ser 10", async () => {
    const user = userEvent.setup();

    render(<Calculator />);

    const result = screen.getByTestId("result");

    const toggleButton5 = screen.getByRole("button", {
      name: /5/i,
    });

    await user.click(toggleButton5);

    expect(result).toHaveTextContent('5');

    const toggleButtonX = screen.getByRole('button', {
      name: /\*/i
    })
    
    await user.click(toggleButtonX);

    expect(result).toHaveTextContent('5*');
    
    const toggleButton2 = screen.getByRole("button", {
      name: /2/i,
    });

    await user.click(toggleButton2);

    expect(result).toHaveTextContent('5*2');

    const toggleButtonCalculate = screen.getByRole('button', {
      name: /=/i
    })

    await user.click(toggleButtonCalculate);
    
    expect(result).toHaveTextContent('10');
  })

test("5 * 2 + 10 deve ser 20 e não 25", async () => {
  const user = userEvent.setup()

  render(<Calculator/>)

  const result = screen.getByTestId("result");

  const toggleButton5 = screen.getByRole('button', {
    name: /5/i
  }) 

  await user.click(toggleButton5)

  expect(result).toHaveTextContent(5)

  const toggleButtonX = screen.getByRole('button', {
    name: /\*/i
  })

  await user.click(toggleButtonX)

  expect(result).toHaveTextContent('5*')

  const toggleButton2 = screen.getByRole('button', {
    name: /2/i
  })

  await user.click(toggleButton2)

  expect(result).toHaveTextContent('5*2')

  const toggleButtonPlus = screen.getByRole('button', {
    name: /\+/i
  })

  await user.click(toggleButtonPlus)

  expect(result).toHaveTextContent('5*2+')

  const toggleButton1 = screen.getByRole('button', {
    name: /1/i
  })

  const toggleButton0 = screen.getByRole('button', {
    name: /0/i
  })
  await user.click(toggleButton1)
  await user.click(toggleButton0)

  expect(result).toHaveTextContent('5*2+10')

  
  const toggleButtonCalculate = screen.getByRole('button', {
    name: /=/i
  })

  await user.click(toggleButtonCalculate);

  expect(result).toHaveTextContent('20')
})
});