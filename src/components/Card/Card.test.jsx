import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

//Prop olarak veriler alan bir bişeleni test ediyorsak aldığı propların benzerini göndermemiz gerekiyor
test("Miktar , başlık ve fotoğraf gelen veriye göre ekrana basılır", () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  //Miktar spanını çağır
  const amount = screen.getByTestId("amount");

  //Miktar 5 mi kontrol et
  expect(amount.textContent).toBe("5");

  // choclate yazısı ekrana basıldı mı
  screen.getByText("Chocolate");

  // Resim elementini al
  const image = screen.getByAltText("çeşit-resim");

  //src değeri "/images/chocolate.png" mi?
  expect(image).toHaveAttribute("src", item.imagePath);
});

//
test("Buttonlara tıklanınca fonksiyonlar doğru parametreler ile çalışır", async () => {
  const user = userEvent.setup();

  // prop olarak scoops bileşeninden gönderilen orjinal fonksiyonları göndermyiceğimizden fonksiyonlar doğru şekilde doğru zamanda doğru parmetreler ile çalışıyor mu kontrolünü yapabilmek için asıl fonksiyonu taklit eden mock fonksiyonu tanımlamak gerekir

  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={3}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  //butonları al
  const addBtn = screen.getByRole("button", { name: /ekle/i });
  const clearBtn = screen.getByRole("button", { name: /sıfırla/i });

  //ekle butonuna tıkla
  await user.click(addBtn);

  //addToBasket fonks. doğru parametreleri ile alarak çalıştı mı?
  expect(addMockFn).toHaveBeenCalledWith(item);

  //sıfırla butonuna tıkla
  await user.click(clearBtn);

  //clearFromBasket fonsiyonu doğru parametreleri alarak çalıştı mı?
  expect(clearMockFn).toHaveBeenCalledWith("Chocolate");
});
