import './../css/Info.css';
import quality from './../img/quality.png';
import comfort from './../img/comfort.png';
import benefit from './../img/benefit.png';

let Info;

Info = () =>
{
    return(
        <div className='info'>
            <div className='infoCard'>
                <img src={quality}/>
                <div className='infoCardTitle'>КАЧЕСТВЕННЫЙ</div>
                <div className='infoText'>
                    Ваш питомец является членом семьи и должен покупать только самые лучшие продукты. Мы предлагаем Вам товары от ведущих мировых производителей.
                </div>
            </div>
            <div className='infoCard'>
                <img src={comfort}/>
                <div className='infoCardTitle t2'>УДОБСТВО</div>
                <div className='infoText'>
                    Наш интернет-магазин доступен круглосуточно, вам не придется стоять в очередях или думать о том, как доставить товар на дом. Мы сделаем это за вас. Заходите в наш интернет-магазин, выбирайте товар, читайте или пишите отзывы. Заказ можно разместить очень легко, и мы отправим его вам по почте. Вы также можете приехать к нам на склад и получить товар лично. Если у Вас возникли вопросы, Вы можете написать нам и уточнить информацию об интересующем Вас товаре. Мы заботимся об удобстве наших клиентов в первую очередь.
                </div>
            </div>
            <div className='infoCard'>
                <img src={benefit}/>
                <div className='infoCardTitle t3'>ВЫГОДЫ</div>
                <div className='infoText'>
                    Покупать в интернет-магазине zoo-plus.lv не только удобно, но и выгодно. Мы не делаем огромных наценок на товары, как это делают торговые сети, потому что нашему магазину не нужны торговые площади и большое количество сотрудников. Поэтому вся предлагаемая нами продукция будет доступна очень широкому кругу покупателей. Вы оцените цену и качество товара. Дорого - не значит хорошо, а дешево - не значит плохо. Вы всегда сможете выбрать товар исходя из своего бюджета и требований. И даже если положительные эмоции вашего питомца сложно оценить, это не значит, что вам придется тратить на него огромные деньги.
                </div>
            </div>
        </div>
    );
};

export default Info;