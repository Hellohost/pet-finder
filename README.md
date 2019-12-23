# Ищейка

Ищейка - это веб-приложение которое помогает найти потерянных животных.им 

## Наша миссия
Каждый год в мире пропадает более 10 милионов домашних питомцев и только 23% из них удается найти свой дом.
Наш сервис призван помочь попавшим в такую непростую ситуацию людям быстро найти своих потервшихся любимцев, а небезразличным к судьбе потерянных питомцев помочь им найти своих хозяев.

## О приложении
Приложение представляет собой сервис позволяющий разместить объявления, о пропаже или находке питомца. Реализована возможность просмотра объявлений на карте с использованием Google Maps Api. При просмотре всех объявлений одной из категорий вы можете использовать фильтрацию по различным параметрам, таким как порода, пол, дата объявления. В личном кабинете пользователь может создавать новые объявления, а так-же он может редактировать и удалять уже существующие. При создании нового объвления пользователь может загрузить фотографию своего питомца с помощью технологии Multer. В приложении реализован алгоритм поиска совпадений потерянных и найденных животных, что дает пользователю возможность быстро найти подходящие объвления без необходимости делать это вручную.

## Технологии
В качестве серверной состовляющией мы использовали Node.js и Express.
Для хранения данных используется MongoDB + mongoose.
А на стороне клиента, используется библиотека React с использование Redux.
