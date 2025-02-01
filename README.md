## 3D print site (React) **прототип*

Часть пет-проекта — сайт по оказанию услуг 3D-печати.

Стек: React, JavaScript, SASS, Axios

iOS-клиент и Node.JS-сервер:

[![GitHub](https://img.shields.io/badge/GitHub-3d_print_client_(iOS)-blue?logo=github)](https://github.com/rnaythe4th/3d-print-client-ios)
[![GitHub](https://img.shields.io/badge/GitHub-CuraEngine_(Docker)-blue?logo=github)](https://github.com/rnaythe4th/CuraEngine_docker)


#### Описание
Сайт для расчёта стоимости печати загруженной 3D-модели.

Функционал:

- Выбор 3D-модели из файла
- Загрузка модели на сервер
- Получение ответа от сервера и отображение стоимости печати загруженной модели

<img src="Screenshots/Screenshot1.png" width="600px">
    
<br>
• • • • • • • • • • • • • •

• • • • • • • • • • • • • •



### Описание решаемой проблемы:
Быстро узнать цену 3D-печати нужной модели на заказ практически невозможно. В поисковой выдаче по запросу "3D-печать на заказ <город>" большинство сайтов либо позволяют только оформить заявку с последующим рассмотрением менеджерами, либо указывают лишь цену печати за 1 грамм материала без учета особенностей модели.
### Решение проблемы:
Создание системы со следующим принципом работы:<br>
1. Клиент (web, mobile) позволяет пользователю загрузить имеющуюся 3D-модель из файла.
2. Затем клиент отправляет модель на сервер.
3.Сервер нарезает модель, как это делает слайсер (ПО для подготовки модели к 3D-печати), и извлекает из полученного файла объем израсходованного материала в мм³.
4. Сервер отправляет полученные данные обратно клиенту
5. Клиент получает значение и рассчитывает итоговую стоимость печати по заранее заданной формуле, учитывая цену пластика и наценку.


---
## 3D Print Site (React) **Prototype*

Part of a pet project — a website for 3D printing services.

Tech stack: React, JavaScript, SASS, Axios

iOS client and Node.js server:

[![GitHub](https://img.shields.io/badge/GitHub-3D_Print_Client_(iOS)-blue?logo=github)](https://github.com/rnaythe4th/3d-print-client-ios)
[![GitHub](https://img.shields.io/badge/GitHub-CuraEngine_(Docker)-blue?logo=github)](https://github.com/rnaythe4th/CuraEngine_docker)

### Description
A website for calculating the cost of printing an uploaded 3D model.

Functionality:

- Selecting a 3D model from a file
- Uploading the model to the server
- Receiving a response from the server and displaying the estimated printing cost


<br>
• • • • • • • • • • • • • •

• • • • • • • • • • • • • •


#### Problem Statement  
It’s nearly impossible to quickly estimate the cost of custom 3D printing for a specific model. Search results for "custom 3D printing in <city>" typically show websites that either:  
- Require submitting a request for manual review by managers, or  
- Only display the price per gram of material without considering the model’s complexity.  

#### Solution  

A system with the following workflow: 

1. **Client** (web/mobile): Lets users upload a 3D model from a file.  
2. The client sends the model to the **server**.  
3. **Server**: Slices the model (similar to slicer software used in 3D printing preparation) and calculates the material volume in mm³.  
4. The server returns the extracted data to the client.  
5. **Client**: Calculates the final cost using a predefined formula that accounts for material price and markup.  
