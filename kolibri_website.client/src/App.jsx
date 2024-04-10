import { useEffect, useState, useRef } from 'react';

import './css/App.css';
//Импорт изображений
import titleIMG from './image/div86.png'
import logo from './image/_1-page-0001-10.png'
import image100 from './image/image-100.png'
import image101 from './image/image-101.png'
import image102 from './image/image-102.png'
import image103 from './image/image-103.png'
import image104 from './image/image-104.png'
import blubox from './image/svg/_15.svg'
import questboximg from './image/div44.png'
import orderboximg from './image/div24.png'
import VKimg from './image/VK.png'
import whatsapp from './image/whatsapp.png'
import instagram from './image/instagram.png'
import telegram from './image/telegram.png'

import div97 from './image/svg/div97.svg'
import div99 from './image/svg/div99.svg'
//


function App() {

    const [Tbl, setForecasts] = useState();
    const [categ, setForecasts2] = useState();
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false); 
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [SelectCat, setSelectCat] = useState(null);
    const modalOverlayRef = useRef(null);
    const [showMainPage, setShowMainPage] = useState(true); 
    const [showCategPage, setShowCategPage] = useState(false);
    const [showProductPage, setShowProductPage] = useState(false);
    useEffect(() => {
        Table();
    }, []);
    useEffect(() => {
        Category();
    }, []);

    const closeModalOverlay = (e) => {
        if (modalOverlayRef.current === e.target) {
            setShowAddCategoryModal(false);
        }
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleCategoryClick = (category) => {
        setSelectCat(category);
        setShowCategPage(false);
        setShowProductPage(true);
    };


    const MainPageContent = (
        <button id="MainP_Button" onClick={() => {
            setShowMainPage(false);
            setShowCategPage(true);
        }}>
            <div className="product">
                <h4 className="product__title">Просмотреть категории</h4>
            </div>
        </button>);

    const Head = (
        <header className="header">
            <div className="header-content">
                <div className="logo"><img className="logo img" src={logo} /></div>
                <div className="navigation">
                    <a href='#about-us' className="nav-link">О нас</a>
                    <button className="nav-link">Каталог</button>
                    <button className="nav-link">Алгоритм работы</button>
                    <button className="nav-link">Авторские проекты</button>
                    <button className="nav-link">Материалы</button>
                    <a href='#froze' className="nav-link">Вызов на замер</a>
                    <button className="nav-link">Сотрудничество</button>
                    <button className="nav-link">Контакты</button>
                </div>
            </div>
        </header>
    );

    const Title = (
        <div className="container">
            <img className="image" src={titleIMG} />
            <div className="content">
                <div className="background-1"></div>
                <div className="text-section">
                    <div className="text">
                        Создаем атмосферу уюта и комфорта
                        <br />
                        в вашем доме с любовью и вниманием
                        <br />
                        к деталям
                    </div>
                    <div className="subtitle">Мир Интерьерных Решений</div>
                </div>
                <div className="button-section">
                    <button className="button">Перейти в каталог</button>
                </div>
            </div>
        </div>
    );

     const Content = Tbl === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :<div className="cat-block">
            <div className="title-style">Популярные категории</div>
            <div className="cat-blocks">
                {Tbl.filter(item => item.id <= 3).map(item => (
                    <button key={item.id} className="common-container">
                        <img className="common-item" src={blubox} alt="Category 1" />
                        <div className="common-overlay"></div>
                        <div className="common-text">Категория {item.id}</div>
                    </button>
                ))}
            </div>
            <div className="button-section">
                <button className="button button-2">Перейти в каталог</button>
            </div>
        </div>

    const about = (
        <div className="container-2">
            <div className="content-2">
                <div className="section1">
                    <div className="block1"></div>
                    <div className="block2"></div>
                    <div className="block3"></div>
                </div>
                <div className="section2">
                    <p className="text-block">
                        <span className="highlight">Компания </span>
                        <span className="highlight">«МИР» </span>
                        <span className="company-description">
                            представляет собой современное производство корпусной мебели для дома и офиса. <br /><br /> Мы создаем
                            <span className="highlight"> качественные изделия</span> по
                            <span className="highlight"> индивидуальным проектам</span>, осуществляем их доставку, подъем, сборку и
                            монтаж. Их отличает <span className="highlight">надежность, функциональность</span> и <span className="highlight">практичность</span>. <br /><br />
                            Производство нашей компании оснащено <span className="highlight">передовым итальянским и немецким оборудованием, </span>
                            что обеспечивает необходимые эксплуатационные
                            характеристики продукции и позволяет добиться
                            <span className="highlight"> европейского качества</span>.
                        </span>
                    </p>
                    <div className="about-us" id="about-us">О нас</div>
                </div>
            </div>
            <div className="container-3">
                <div className="background-2"></div>
                <div className="content-3">
                    <p className="text-1">
                        <br />Мы свыше <span className="highlight">15 лет </span>
                        работаем в сфере мебельного производства и постоянно <span className="highlight">совершенствуем технологии</span>.<br /><br />
                        Независимо от размеров и конфигурации помещения, <span className="highlight">команда профессионалов</span> "Мира Интерьерных Решений" составит проект, соответствующий <span className="highlight"> Вашим вкусовым предпочтениям</span> и соответствующий архитектурным и коммуникационным особенностям!<br /><br />
                        Более того, мы <span className="highlight">самостоятельно</span> принимаем решение о конечной стоимости изделий, так как не зависим от различных посредников. <span className="highlight">Полный производственный цикл</span> от замера до сборки изделия осуществляется силами наших специалистов.
                    </p>
                </div>
            </div>
        </div>
    )

    const advantages = (
        <div className="container-pre">
            <div className="comfort-text">Мы прилагаем все усилия для вашего комфорта</div>
            <div className="section">
                <div className="feature">
                    <div className="icon-title">
                        <img className="icon-1" src={image102} />
                        <div className="title">Гарантия качества</div>
                    </div>
                    <div className="description">Гарантия качества нашей продукции благодаря использованию
                        высококачественных материалов и профессиональному производству
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-title">
                        <img className="icon-1" src={image103} />
                        <div className="title">Премиальные материалы</div>
                    </div>
                    <div className="description">На нашем мебельном сайте вы найдете материалы высочайшего качества для
                        изготовления мебели
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-title">
                        <img className="icon-1" src={image104} />
                        <div className="title">Быстрый срок изготовления</div>
                    </div>
                    <div className="description">Изготовление мебели на заказ в кратчайшие сроки</div>
                </div>
            </div>
            <div className="section">
                <div className="feature">
                    <div className="icon-title">
                        <img className="icon-1" src={image100} />
                        <div className="title">Бесплатный замер</div>
                    </div>
                    <div className="description">Наши специалисты проведут бесплатную консультацию и замеры, чтобы подобрать
                        наилучший вариант
                    </div>
                </div>
                <div className="feature">
                    <div className="icon-title">
                        <img className="icon-1" src={image101} />
                        <div className="title">Быстрая доставка и сборка</div>
                    </div>
                    <div className="description">Воспользуйтесь нашей быстрой доставкой и качественной сборкой мебели</div>
                </div>
            </div>
        </div>
    );


    const QuestForm = (
        <div className="container-4">
            <img className="image-1" src={questboximg} alt="Изображение в блоке контейнера 4" />
            <div className="content-4">
                <div className="header-3">
                    <div className="title-2">У вас остались вопросы?</div>
                    <div className="description-2">
                        Задайте вопрос и оставьте свои контактные данные,
                        <br />
                        менеджер свяжется с вами в ближайшее
                        <br />
                        время и проконсультирует
                    </div>
                </div>
                <div className="form">
                    <div className="input-group">
                        <input type="text" id="questioner" className="form-input name-2" placeholder="Введите Имя" />
                    </div>
                    <div className="input-group">
                        <input type="text" id="phonenumber" className="form-input phone-1" placeholder="+7 (___)-___-__-__" />
                    </div>
                    <div className="input-group question">
                        <input type="text" id="question" className="form-input" placeholder="Задайте вопрос" />
                    </div>
                </div>
                <div className="button-section">
                    <button className="button button-3" onClick={sendQuestion}>Отправить вопрос</button>
                </div>
            </div>
        </div>
    );

    const LastProj = (
        <section className="projects">
            <h2 className="title-style">Наши последние проекты</h2>
            <div className="project-grid">
                <div className="project-item">
                    <div className="project-image"></div>
                    <div className="project-image"></div>
                </div>
                <div className="project-item">
                    <div className="project-image"></div>
                    <div className="project-image"></div>
                </div>
            </div>
            <div className="project-featured"></div>
        </section>
    )

    const OrderForm = (
        <div className="container-5" id="order-form">
            <img className="header-image" src={orderboximg} alt="Header Image" />
            <div className="content-5">
                <div className="header-text">
                    <span className="header-span header-white">Готовы</span>
                    <span className="header-span bold header-white"> превратить </span>
                    <span className="header-span header-white">свои</span>
                    <br />
                    <span className="header-span bold header-blue">мечты</span>
                    <span className="header-span bold header-blue"> в </span>
                    <span className="header-span header-blue bold">реальность</span>
                    <span className="header-span header-blue bold">?</span>
                </div>
                <div className="sub-header-text">
                    Начните с вызова мастера на замер для вашего дома и доверьтесь нашей команде профессионалов
                </div>
                <div className="input-section">
                    <div className="input-wrapper">
                        <div className="input-bg"></div>
                        <input type="text" id="customername" className="input-field" placeholder="Введите Имя" />
                    </div>
                    <div className="input-wrapper">
                        <div className="input-bg"></div>
                        <input type="text" id="customerphone" className="input-field" placeholder="+7 (___)-___-__-__" />
                    </div>
                </div>
                <div className="button-section-3">
                    <button className="call-button-3" onClick={sendOrder}>Вызвать на замер</button>
                </div>
            </div>
        </div>
    )

    const Feedback = (
        <div className="container-reviews">
            <div className="title-style">Отзывы наших клиентов</div>
            <div className="review-container">
                <div className="review">
                    <div className="review-content">
                        <div className="review-details">
                            <div className="review-author">Сергей</div>
                            <div className="review-date">21.03.2024</div>
                        </div>
                        <div className="review-text">
                            Мы абсолютно в восторге от нашей кухни, сделанной на заказ! Результат превзошел все наши
                            ожидания. Каждая деталь сделана с высочайшим качеством, а функциональность на высоте. Очень
                            рекомендуем услуги по изготовлению кухонь на заказ!
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="review-content">
                        <div className="review-details">
                            <div className="review-author">Сергей</div>
                            <div className="review-date">21.03.2024</div>
                        </div>
                        <div className="review-text">
                            Мы абсолютно в восторге от нашей кухни, сделанной на заказ! Результат превзошел все наши
                            ожидания. Каждая деталь сделана с высочайшим качеством, а функциональность на высоте. Очень
                            рекомендуем услуги по изготовлению кухонь на заказ!
                        </div>
                    </div>
                </div>
            </div>
            <div className="read-reviews">
                <button className="button read-reviews-button">Читать отзывы</button>
            </div>
        </div>
    );



    //const MainPageContent = (
    //    //<div className='maintitle'>
    //    //    <img className='maintitleimage' src={mainimage} />
    //    //    <div className='transparent' />
    //    //    <div className='mainpagesignature'>
    //    //        <div className='slogan'>Создаем атмосферу уюта <br />и комфорта в вашем доме <br />с любовью и вниманием <br />к деталям</div>
    //    //        <div className='mainpagename'>Мебельная компания “Колибри”</div>
    //    //    </div>
    //    //    <button className='buttontocatalog' onClick={() => {
    //    //        setShowMainPage(false);
    //    //        setShowCategPage(true);
    //    //    }}>
    //    //        <div className='buttoncatalogshadow' />
    //    //        <div className='buttoncatalogstyle' />
    //    //        <div className='buttoncatalogtext'>Перейти в каталог</div>
    //    //    </button>
    //    //</div>
    //);
    const MainPage = (
        <main className="div7" >
            {Title}
            {advantages}
            {about}
            {Content}
            {QuestForm}
            {LastProj}
            {OrderForm}
            {Feedback}
        </main>
    );


    const Categcont = categ === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <section className="section-new" id="W1">
            <div className="container">
                <div className="products-wrapper">
                    {categ.map(categ =>
                        <button id="MainP_Button" className="product-link" key={categ.id} onClick={() => handleCategoryClick(categ.category)}>
                            <div className="product">
                                <option value={categ.id}>{categ.category}</option>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </section>

    const contents = Tbl === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <section className="section-new" id="W1">
            <div className="container">
                <div className="products-wrapper">
                    {Tbl.filter(item => item.category === SelectCat).map(Tbl =>
                        <a href="#" className="product-link" key={Tbl.id}>
                            <div className="product">
                                <div>
                                    <img key={Tbl.id} src={images[Tbl.id-1]} alt={`Image ${Tbl.id}`} />
                                </div>
                                <h4 className="product__title">{Tbl.name}</h4>
                                <div className="product__price">
                                    <span className="product__price_pr">{Tbl.price}</span>
                                </div>
                            </div>     
                        </a>
                    )}
                </div>
            </div>
        </section>




    const footer = (
        <footer className="footer">
            <div className="contact-info">
                <div className="background"/>
                <div className="details">
                    <div className="email">world_of_interior@mail.ru</div>
                    <div className="phone">+7 (927) 904-97-29</div>
                    < div className="icon-container" >
                        <a href="https://vk.com/world_of_interior_163" target="_blank">
                            <img className="icon" src={VKimg} />
                        </a>
                        <a href="">
                            <img className="icon" src={whatsapp} />
                        </a>
                        <a href="">
                            <img className="icon" src={instagram} />
                        </a>
                        <a href="">
                            <img className="icon" src={telegram} />
                        </a>
                    </div >
                </div>
            </div>
            <div className="company-info">
                <div className="company-name">
                    <span>
                        <span className="name">Мебельная Компания </span>
                        <span className="slogan">“Мир интерьерных решений”</span>
                    </span>
                </div>
                <div className="address">
                    Самарская область, город Самара, ул. Уральская, д. 34
                </div>
                <div className="disclaimer">
                    Сайт .... Адрес сайта... носит исключительно информационный характер
                    и ни при каких условиях не является публичной офертой. Компания
                    оставляет за собой право изменять комплектацию, условия сервиса,
                    цены в любой период времени. Изображения изделий и материалов в
                    каталогах и на сайте, в том числе цвет, рисунок и другие элементы,
                    могут отличаться. Стоимость изделий указывается ориентировочная.
                    Компания не несёт ответственности за услуги предоставляемые
                    сторонними организациями.
                </div>
            </div>
            <div className="site-links">
                <a href="#" className="site-link">Карта сайта</a>
                <a href="#" className="site-link">Оферта</a>
                <a href="#" className="site-link"> Политика конфиденциальности</a>
                <a href="#" className="site-link">Пользовательское соглашение</a>
            </div>
        </footer>

        )

    const cat = categ === undefined
        ? <p></p>
        : <select id="category" onChange={(e) => {
            if (e.target.value === "addNewCategory") {
                setShowAddCategoryModal(true);
            }
        }}>
            {categ.map(categ =>
                <option key={categ.id}>{categ.category}</option>
            )}
            <option value = "addNewCategory">Добавить или удалить новую категорию</option>
        </select>
    const catf = categ === undefined
        ? <p></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Категория</th>
                </tr>
            </thead>
            <tbody>
                {categ.map(categ =>
                    <tr key={categ.id}>
                        <td>{categ.id}</td>
                        <td>{categ.category}</td>
                    </tr>
                )}
            </tbody>
        </table>;


    return (
        <div className='div'>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet" />
            {Head}
            {MainPage}
            {footer}
        </div>
    ); 

    async function sendOrder() {
        const name = document.getElementById('customername').value;
        const phonumber = document.getElementById('customerphone').value;
        await fetch(`addcustomer?customer=${name, phonumber}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phonumber })
        });
    }

    async function sendQuestion() {
        const name = document.getElementById('questioner').value;
        const phonumber = document.getElementById('phonenumber').value;
        const question = document.getElementById('question').value

        await fetch(`addquestion?question=${name, phonumber, question}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phonumber, question })
        });
    }

    async function Table() {
        try {
            const response = await fetch('table');
            const data = await response.json();
            setForecasts(data);
            let len;
            if (Array.isArray(data)) {
                len = data.length;
            } else {
                len = 0;
            }
            fetchImages(len)
        } catch(error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }

    async function fetchImages (l){
        const loadImages = [];
        for (let i = 1; i <= l; i++) {
            const imageModule = await import(`./image/img${i}.png`);
            loadImages.push(imageModule.default);
        }
        setImages(loadImages);
    }

    async function Category() {
        const hz = await fetch('category');
        const data = await hz.json();
        setForecasts2(data);
    }
    async function handleUpload() {
        const imageFolder = path.join(__dirname, 'images');

        selectedFile.download
        localStorage.setItem("image", selectedFile.src);
        //fileDownload(selectedFile, 'img.jpg')
        //saveFile(selectedFile, fileput);
    }
    async function sendData() {
        const category = document.getElementById('category').value;
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        await fetch(`newcortege?cort=${category, name, price}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category, name, price })
        });
        
        Table();
    }
    async function delData() {
        const ids = document.getElementById('delID').value;
        await fetch(`delcortege?id=${ids}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids })
        });
        
        Table();
    }
    async function sendCateg() {
        const category = document.getElementById('newcategory').value;
        await fetch(`addcategory?categ=${category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category })
        });
        Category()
    }
    async function delCateg() {
        const category = document.getElementById('delcategory').value;
        await fetch(`delcategory?id=${category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category })
        });
        Category()
    }
}


//className
export default App;

