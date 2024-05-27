import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("Sosları ekleme ve çıkarma işlemleri toplama etki eder", async () => {
  //userEvent kurulum
  const user = userEvent.setup();

  //1)Bileşeni render etme
  render(<Toppings />);

  //2) Toplam spanı al
  const total = screen.getByTestId("total");

  //3) bütün sos kartlarını al
  const toppings = await screen.findAllByRole("checkbox");

  //4)toplam ücret sıfır mı kontrol et
  expect(total.textContent).toBe("0");

  //5) bütün checkbox 'ların tiksiz olduğunu kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  //6) soslardan birine tıkla
  await user.click(toppings[0]);

  //7) total 3 ' eşit mi kontrol et?
  expect(total.textContent).toBe("3");

  //8) soslardan birine daha tıkla
  await user.click(toppings[4]);

  //9)total 6 ' a eşit mi kontrol et
  expect(total.textContent).toBe("6");

  //10) eklenen soslardan birini çıkar
  await user.click(toppings[4]);

  //11)total 3 ' e eşit mi
  expect(total.textContent).toBe("3");

  //12)eklenen son sosu çıkar
  await user.click(toppings[0]);

  //13) total 0 'a eşit mi kontrol et
  expect(total.textContent).toBe("0");
});
