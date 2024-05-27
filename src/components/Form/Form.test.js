import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre button aktifliği", () => {
  //1)Test edilecek olan bileşen render edilir
  render(<Form />);

  //2)Gerekli elemanları çağırma
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  //3)checkbox tiklenmemiş olduğunu kontrol et
  expect(checkbox).not.toBeChecked();

  //4) buttonun disable olduğunu kontrol et
  expect(button).toBeDisabled();

  //5)checkbox tıkla
  fireEvent.click(checkbox);

  //6) button aktif olduğunu kontrol et
  expect(button).toBeEnabled();

  //7)checboxa tıkla
  fireEvent.click(checkbox);

  //8)buttonun inaktif olduğunu kontrol et
  expect(button).toBeDisabled();
});

test("Onay butonunun hover durumuna göre bildirim gözükür", () => {
  //1) formu render etme
  render(<Form />);

  //2)gerekli elemanları çağır
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i); //insensetive > büyük küçük harfleri dikkat etme sadace bir kısım yazı var mı?

  //3) checkbox tikle(buton aktif hale gelir)
  fireEvent.click(checkbox);

  //4) bildirim ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();

  //5)mouse butona getir
  fireEvent.mouseEnter(button);

  //6)bildiiri ekrana geldi mi kontrol et
  expect(alert).toBeVisible();

  //7)mouse butondan çek
  fireEvent.mouseLeave(button);

  //8)bildirim ekrandan gitti mi kontrol et
  expect(alert).not.toBeVisible();
});
