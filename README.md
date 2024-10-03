# LoginSignupApp
Proje Teknolojileri: React Native, Expo, React Navigation, Yarn Geliştirici: Bu proje eğitim amaçlı veya daha büyük projeler için temel oluşturma amacıyla geliştirilmiştir.

# My React Native Expo App

This is a React Native app built with Expo and Yarn. It includes a **Login** and **Sign-up** screen, utilizing **React Navigation** for smooth page transitions.


## Features
- User authentication with **Login** and **Sign-up** pages.
- Navigation between different screens using **React Navigation**.
- Styled with responsive design in mind using **StyleSheet**.
- Managed package dependencies with **Yarn**.
- Expo managed workflow, allowing easy development and testing.

## Technologies
This project uses the following technologies and libraries:
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Yarn](https://yarnpkg.com/)
- 
## Project Structure
```bash
ReactNativeAuthApp/
├── assets/
│   ├── fonts/
│   ├── images/
├── src/
│   ├── components/
│   │   └── CustomButton.jsx    # Özel buton bileşeni
│   ├── routers/
│   │   └── router.js           # Navigasyon yönlendirmeleri
│   ├── screens/
│   │   ├── Home/
│   │   │   └── index.jsx       # Ana ekran
│   │   ├── Login/
│   │   │   └── index.jsx       # Giriş ekranı
│   │   ├── Register/
│   │   │   └── index.jsx       # Kayıt ekranı
│   ├── utils/
│   │   ├── colors.js           # Uygulama genelindeki renkler
│   │   └── image.js            # Görseller
├── App.js                       # Uygulamanın giriş noktası
├── package.json                 # Proje bağımlılıkları
├── yarn.lock                    # Yarn kilit dosyası


## Kurulum ve Projeyi Çalıştırma

Projeyi yerel ortamınıza klonladıktan sonra bağımlılıkları yükleyip projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Bağımlılıkları Yükleme - `yarn install`

Proje bağımlılıklarını yüklemek için **`yarn install`** komutunu kullanın. Bu komut, proje içerisindeki `package.json` dosyasında listelenen tüm bağımlılıkları indirip `node_modules` klasörüne ekler.

```bash
yarn install


### 2. Bağımlılıkları yükledikten sonra projeyi çalıştırmak için - `yarn start`

```bash
yarn start



