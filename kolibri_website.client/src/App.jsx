import { useEffect, useState} from 'react';

import './css/App.css';
//Импорт изображений
import titleIMG from './image/div86.png'
import logo from './image/_1-page-0001-10.png'
import image100 from './image/image-100.png'
import image101 from './image/image-101.png'
import image102 from './image/image-102.png'
import image103 from './image/image-103.png'
import image104 from './image/image-104.png'
import questboximg from './image/div44.png'
import orderboximg from './image/div24.png'
import VKimg from './image/VK.png'
import whatsapp from './image/whatsapp.png'
import instagram from './image/instagram.png'
import telegram from './image/telegram.png'
import FBtitle from './image/container0.png'
import ArrowR from './image/svg/_12.svg'
import ArrowL from './image/svg/_20.svg'
import empformimg from './image/image-150.png'
import shildsvg from './image/svg/shield-checkmark-outline-10.svg'
import pplsvg from './image/svg/people-outline-10.svg'
import sclsvg from './image/svg/school-outline-10.svg'
import spksvg from './image/svg/sparkles-outline-20.svg'
import designs from './image/svg/_14.svg'
import archit from './image/svg/_23.svg'
import provid from './image/svg/_32.svg'
import desmain from './image/div30.png'
import arcmain from './image/div38.png'
import prvmain from './image/div40.png'
import prodimg from './image/image 29.png'
import instimg from './image/image 30.png'
import liftimg from './image/image 31.png'
import delvimg from './image/image 32.png'
import guarimg from './image/image 34.png'
import careimg from './image/image 33.png'
import avt1 from './image/avt1.jpg'
import avt2 from './image/avt2.jpg'
import avt3 from './image/avt3.jpg'
import avt4 from './image/avt4.jpg'
import avt5 from './image/avt5.jpg'
import abt1 from './image/Картинка о нас 3.png'
import abt2 from './image/Картинка о нас 2.png'
import abt3 from './image/Картинка о нас 4.png'
import abt4 from './image/Картинка о нас 1.png'
import vop1 from './image/11 (1).png'
import vop2 from './image/11 (2).png'
import vop3 from './image/11 (3).png'


function App() {

    const [Tbl, setForecasts] = useState();
    const [maters, setmaters] = useState();
    const [avtprj, setavtprj] = useState();
    const [FB, setFB] = useState();
    const [showMainPage, setShowMainPage] = useState(true);
    const [showCategPage, setShowCategPage] = useState(false);
    const [showFeedbackPage, setFeedbackPage] = useState(false);
    const [showEmployeePage, setshowEmployeePage] = useState(false);
    const [showMaterialPage, setshowMaterialPage] = useState(false);
    const [Nid, setNid] = useState(1);
    const [currentFeedback, setCurrentFeedback] = useState(0);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCategIndex, setCurrentCategIndex] = useState(0);
    const [showAlgorithmPage, setshowAlgorithmPage] = useState(false);
    const [showAutorProjPage, setshowAutorProjPage] = useState(false);
    const [showSiteMap, setshowSiteMap] = useState(false);
    const [showPolPage, setshowPolPage] = useState(false);
    const [showOfferPage, setshowOfferPage] = useState(false);
    const [showAnsQstPage, setshowAnsQstPage] = useState(false);
    const [showPolSogPage, setshowPolSogPage] = useState(false); 

    const openModal1 = (index, itID) => {
        console.log(itID)
        setCurrentImageIndex(index);
        setCurrentCategIndex(itID - 1);
        setModalIsOpen1(true);
    };

    const closeModal1 = () => {
        setModalIsOpen1(false);
    };

    const openModal2 = (index, itID) => {
        console.log(itID)
        setCurrentImageIndex(index);
        setCurrentCategIndex(itID - 1);
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const openModal3 = (index, itID) => {
        console.log(itID)
        setCurrentImageIndex(index);
        setCurrentCategIndex(itID - 1);
        setModalIsOpen3(true);
    };

    const closeModal3 = () => {
        setModalIsOpen3(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            //behavior: 'smooth'
        });
    }

    useEffect(() => {
        Table();
        sFeedback();
        Materials();
        AvtProj();
        if (FB != undefined) {
            const newCurrentFeedback = FB.filter(feedback => feedback.id === Nid);
            setCurrentFeedback(newCurrentFeedback);
        }
    }, []);




    const MoveEmployee = () => {
        setshowEmployeePage(true);
        setShowMainPage(false);
        setFeedbackPage(false);
        setShowCategPage(false);
        setshowMaterialPage(false);
        setshowAlgorithmPage(false);
        setshowAutorProjPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MoveFeedback = () => {
        setFeedbackPage(true);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setShowCategPage(false);
        setshowMaterialPage(false);
        setshowAlgorithmPage(false);
        setshowAutorProjPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        setCurrentFeedback(FB.find(feedback => feedback.id === Nid))
        scrollToTop()
    }
    const MoveMainPage = () => {
        setShowMainPage(true);
        setFeedbackPage(false);
        setshowEmployeePage(false);
        setShowCategPage(false);
        setshowMaterialPage(false);
        setshowAlgorithmPage(false);
        setshowAutorProjPage(false)
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MoveCategPage = (px) => {
        setShowCategPage(true);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowMaterialPage(false);
        setshowAlgorithmPage(false);
        setshowAutorProjPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        setTimeout(() => {
            switch (px) {
                case 0:
                    window.scrollTo(0, 0);
                    break;
                case 1:
                    window.scrollTo(0, 550);
                    break;
                case 2:
                    window.scrollTo(0, 1000);
                    break;
                case 3:
                    window.scrollTo(0, 1500);
                    break;
                case 4:
                    window.scrollTo(0, 2000);
                    break;
            }
        }, 1);
    }
    const MoveMaterialPage = (px) => {
        setshowMaterialPage(true);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowAlgorithmPage(false);
        setshowAutorProjPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        setTimeout(() => {
            switch (px) {
                case 0:
                    window.scrollTo(0, 0);
                    break;
                case 1:
                    window.scrollTo(0, 700);
                    break;
                case 2:
                    window.scrollTo(0, 1150);
                    break;
            }
        }, 1);
    }
    const MoveAlgorthmPage = (px) => {
        setshowAlgorithmPage(true);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowAutorProjPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        setTimeout(() => {
            switch (px) {
                case 0:
                    window.scrollTo(0, 0);
                    break;
                case 1:
                    window.scrollTo(0, 250);
                    break;
                case 2:
                    window.scrollTo(0, 550);
                    break;
                case 3:
                    window.scrollTo(0, 850);
                    break;
            }
        }, 1);
    }
    const MoveAutorProjPage = () => {
        setshowAutorProjPage(true);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowSiteMap(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MoveSitePage = () => {
        setshowSiteMap(true);
        setshowAutorProjPage(false);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowPolPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MovePolPage = () => {
        setshowPolPage(true);
        setshowSiteMap(false);
        setshowAutorProjPage(false);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowOfferPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MoveOfferPage = () => {
        setshowOfferPage(true);
        setshowPolPage(false);
        setshowSiteMap(false);
        setshowAutorProjPage(false);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowAnsQstPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MoveAnsQstPage = () => {
        setshowAnsQstPage(true);
        setshowOfferPage(false);
        setshowPolPage(false);
        setshowSiteMap(false);
        setshowAutorProjPage(false);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        setshowPolSogPage(false);
        scrollToTop()
    }
    const MovePolSogPage = () => {
        setshowPolSogPage(true);
        setshowAnsQstPage(false);
        setshowOfferPage(false);
        setshowPolPage(false);
        setshowSiteMap(false);
        setshowAutorProjPage(false);
        setshowAlgorithmPage(false);
        setshowMaterialPage(false);
        setShowCategPage(false);
        setShowMainPage(false);
        setshowEmployeePage(false);
        setFeedbackPage(false);
        scrollToTop()
    }

    const Head = (
        <header className="header">
            <div className="header-content">
                <button className="logo" onClick={() => MoveMainPage()}><img className="logo img" src={logo} /></button>
                <div className="navigation">
                    <a href='#about-us' className="nav-link" onClick={() => MoveMainPage()}>О нас</a>
                    <button className="nav-link" onClick={() => MoveCategPage(0)}>Каталог</button>
                    <button className="nav-link" onClick={() => MoveAlgorthmPage(0)}>Алгоритм работы</button>
                    <button className="nav-link" onClick={() => MoveAutorProjPage()}>Авторские проекты</button>
                    <button className="nav-link" onClick={() => MoveMaterialPage(0)}>Материалы</button>
                    <a href='#order-form' className="nav-link" onClick={() => MoveMainPage()}>Вызов на замер</a>
                    <button className="nav-link" onClick={() => MoveEmployee()}>Сотрудничество</button>
                    <a href='#footer' className="nav-link">Контакты</a>
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
                    <button className="button" onClick={() => MoveCategPage(0)}>Перейти в каталог</button>
                </div>
            </div>
        </div>
    );

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % Tbl[currentCategIndex].images.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + Tbl[currentCategIndex].images.length) % Tbl[currentCategIndex].images.length);
    };
    const nextImagemat = () => {
        setCurrentImageIndex((currentImageIndex + 1) % maters[currentCategIndex].images.length);
    };
    const prevImagemat = () => {
        setCurrentImageIndex((currentImageIndex - 1 + maters[currentCategIndex].images.length) % maters[currentCategIndex].images.length);
    };
    const nextImageAut = () => {
        setCurrentImageIndex((currentImageIndex + 1) % avtprj[currentCategIndex].images.length);
    };
    const prevImageAut = () => {
        setCurrentImageIndex((currentImageIndex - 1 + avtprj[currentCategIndex].images.length) % avtprj[currentCategIndex].images.length);
    };

    var index;

    const Content = Tbl === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <div className="cat-block">
            <div className="title-style">Популярные категории</div>
            <div className="cat-blocks">
                {Tbl.filter(item => item.id <= 3).map(item => (
                    <button key={item.id} className="common-container" onClick={() => openModal1(index = 0, item.id)}>
                        <img className="common-item" src={'data:image/png;base64,' + item.images[0]} alt="Category 1" />
                        <div className="common-overlay"></div>
                        <div className="common-text">{item.name}</div>
                    </button>
                ))}
            </div>
            <div className="button-section">
                <button className="button button-2" onClick={() => MoveCategPage(0)}>Перейти в каталог</button>
            </div>
            {modalIsOpen1 && (
                <div className="modal-overlay" onClick={closeModal1}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-lbtn" onClick={prevImage}></button>
                        <img src={'data:image/png;base64,' + Tbl[currentCategIndex].images[currentImageIndex]} alt="Category 1" />
                        <button className="modal-rbtn" onClick={nextImage}></button>
                    </div>
                </div>
            )}
        </div>

    const Categs = Tbl === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <main className="divCat" >
            <div className="title-styleCat" >Каталог</div>
            <div className="categors">
                {Tbl.map(item => (
                    <button key={item.id} className="common-container" onClick={() => openModal1(index = 0, item.id)} id={item.id}>
                        <img className="common-item" src={'data:image/png;base64,' + item.images[0]} alt="Category 1" />
                        <div className="common-overlay"></div>
                        <div className="common-text">{item.name}</div>
                    </button>
                ))}
            </div>

            {modalIsOpen1 && (
                <div className="modal-overlay" onClick={closeModal1}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-lbtn" onClick={prevImage}></button>
                        <img src={'data:image/png;base64,' + Tbl[currentCategIndex].images[currentImageIndex]} alt="Category 1" />
                        <button className="modal-rbtn" onClick={nextImage}></button>
                    </div>
                </div>
            )}
        </main>

    const Material = maters === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <main className="divCat" >
            <div className="title-styleCat" >Материалы</div>
            <div className="contentFB">Для изготовления мебели мы используем только экологически чистые материалы <br />и фурнитуру ведущих европейских производителей.
            </div>
            <div className="categors">
                {maters.map(item => (
                    <button key={item.id} className="common-container" onClick={() => openModal2(index = 0, item.id)}>
                        <img className="common-item" src={'data:image/png;base64,' + item.images[0]} alt="Category 1" />
                        <div className="common-overlay"></div>
                        <div className="common-text">{item.name}</div>
                    </button>
                ))}
            </div>

            {modalIsOpen2 && (
                <div className="modal-overlay" onClick={closeModal2}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-lbtn" onClick={prevImagemat}></button>
                        <img src={'data:image/png;base64,' + maters[currentCategIndex].images[currentImageIndex]} alt="Category 1" />
                        <button className="modal-rbtn" onClick={nextImagemat}></button>
                    </div>
                </div>
            )}
        </main>
    const AutorProj = avtprj === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <main className="divCat">
            <div className="title-styleCat">Авторские проекты</div>
            <div className="categors">
                {avtprj.map(item => (
                    <button key={item.id} className="common-container" onClick={() => openModal3(index = 0, item.id)}>
                        <img className="common-item" src={'data:image/png;base64,' + item.images[0]} alt="Category 1" />
                        <div className="common-overlay"></div>
                        <div className="common-text">{item.name}</div>
                    </button>
                ))}
            </div>

            {modalIsOpen3 && (
                <div className="modal-overlay" onClick={closeModal3}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-lbtn" onClick={prevImageAut}></button>
                        <img src={'data:image/png;base64,' + avtprj[currentCategIndex].images[currentImageIndex]} alt="Category 1" />
                        <button className="modal-rbtn" onClick={nextImageAut}></button>
                    </div>
                </div>
            )}
        </main>

    const Algorithm = (
        <main className="divCat">
            <div className="title-styleAlg">Алгоритм работы</div>
            <div className="contentFB">Компания «Мир Интерьерных Решений» больше 15 лет осуществляет производство, доставку
                <br />и монтаж любой корпусной мебели на заказ по Самарской области.
                <br />
                <br />Мы стараемся, чтобы весь производственный цикл от разработки проекта до сборки изделия
                <br />был комфортным для наших клиентов!
            </div>
            <div className="categorsAlg">

                <button className="common-containeralg">
                    <img className="common-itemalg" src={prodimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Производство</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Производство изделия запускается в течении трёх дней с момента согласования с
                            клиентом эскиза и подписания договора. Сроки выполнения заказа составляют от 20 до 30
                            календарных дней, в зависимости от сложности изделий и объёма работ.
                            Все заказы изготавливают по европейским стандартам качества на современном технологичном
                            оборудовании с использованием материалов, имеющих сертификаты соответствия и гарантию.
                        </span>
                    </span>
                </button>

                <button className="common-containeralg">
                    <img className="common-itemalg" src={instimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Сборка и монтаж</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Сборка и монтаж каждого изделия непосредственно на адресе занимает 1-2 дня и
                            осуществляется специалистами нашей компании в удобное для Вас время. Стоимость услуг
                            сборки и монтажа составляет 10% от общей стоимости заказа. Наши клиенты по достоинству
                            оценят профессионализм и аккуратность сотрудников и качественный результат выполненных
                            работ!
                        </span>
                    </span>
                </button>

                <button className="common-containeralg">
                    <img className="common-itemalg" src={liftimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Подъем</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Подъём мебели производится сотрудниками нашей компании. Стоимость подъёма
                            определяется при оформлении заказа.
                        </span>
                    </span>
                </button>

                <button className="common-containeralg">
                    <img className="common-itemalg" src={delvimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Доставка</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Доставка готовых заказов осуществляется наёмным грузовым транспортом и курируется
                            нашей компанией. Стоимость услуги доставки определяется исполняющей организацией и
                            вносится в договор с клиентом. Гарантия целостности изделия контролируется нашей компанией
                            вплоть до окончания монтажа!
                        </span>
                    </span>
                </button>

                <button className="common-containeralg">
                    <img className="common-itemalg" src={guarimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Гарантия</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Продукция компании «МИР» отличается высоким качеством и долговечностью. Имея
                            широкий выбор износостойких материалов и многолетний опыт в производстве мебели , мы
                            изготовим для вас надёжное изделие. На всю мебель от нашей компании предоставляется
                            гарантия в 1 год.
                        </span>
                    </span>
                </button>

                <button className="common-containeralg">
                    <img className="common-itemalg" src={careimg} alt="Category 1" />
                    <div className="common-overlayalg"></div>
                    <div className="common-textalg">Замер</div>
                    <span className="text-overlay">
                        <span className="text-over">
                            Внимание: Замер, дизайн и расчёт стоимости будут для Вас абсолютно бесплатными,
                            даже в случае отказа от дальнейшего сотрудничества!
                            Оставьте заявку на бесплатный замер , и , в удобное для Вас время, приедет наш менеджер с
                            образцами материалов для Вашего изделия. Сделав замер, наш специалист поможет вам
                            определиться с дизайном и материалами. А так же просчитает стоимость заказа. Так же
                            совершенно бесплатно Вы получите рекомендации по технической подготовке помещения к
                            монтажу.
                        </span>
                    </span>
                </button>
            </div>
        </main>
    );
    const about = (
        <div className="container-2">
            <div className="content-2">
                <div className="section1">
                    <img className="block1" src={abt1}></img>
                    <img className="block2" src={abt2}></img>
                    <img className="block3" src={abt4}></img>
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
                <img className="background-2" src={abt3}></img>
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
                    <img className="project-image" src={avt1}></img>
                    <img className="project-image" src={avt5}></img>
                </div>
                <div className="project-item">
                    <img className="project-image" src={avt3}></img>
                    <img className="project-image" src={avt2}></img>
                </div>
            </div>
            <img className="project-featured" src={avt4}></img>
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

    const Feedback = FB === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :
        <div className="container-reviews">
            <div className="title-style">Отзывы наших клиентов</div>
            <div className="review-container">
                {FB.filter(item => item.id <= 2).map(item => (
                    <div className="review" key={item.id}>
                        <div className="review-content">
                            <div className="review-details">
                                <div className="review-author">{item.name}</div>
                                <div className="review-date">{item.date}</div>
                            </div>
                            <div className="review-text">{item.feedback}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="read-reviews">
                <button className="button read-reviews-button" onClick={() => MoveFeedback()}>Читать отзывы</button>
            </div>
        </div>

    const mNid = () => {
        if (Nid !== 1) {
            setNid(Nid - 1);// Обновляем состояние Nid
        }
        if (FB != undefined) {
            const newCurrentFeedback = FB.find(feedback => feedback.id === Nid);
            setCurrentFeedback(newCurrentFeedback);

        }
        console.log(Nid)
    };
    const pNid = () => {
        if (Nid !== FB.length) {
            setNid(Nid + 1);
        }
        if (FB != undefined) {
            const newCurrentFeedback = FB.find(feedback => feedback.id === Nid);
            setCurrentFeedback(newCurrentFeedback);
        }
        console.log(Nid)
    };
    const email = 'world_of_interior@mail.ru';
    const subject = '';
    const body = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const phoneNumber = '+79279049729'; const message = '';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const telegramLink = `https://t.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const footer = (
        <footer className="footer" id="footer">
            <div className="contact-info">
                <div className="background" />
                <div className="details">
                    <a href={mailtoLink} className="email">world_of_interior@mail.ru</a>
                    <div className="phone">+7 (927) 904-97-29</div>
                    < div className="icon-container" >
                        <a href="https://vk.com/world_of_interior_163" target="_blank">
                            <img className="icon" src={VKimg} />
                        </a>
                        <a href={whatsappLink}>
                            <img className="icon" src={whatsapp} />
                        </a>
                        <a href="https://www.instagram.com/w.o.i.163">
                            <img className="icon" src={instagram} />
                        </a>
                        <a href={telegramLink}>
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
                <a className="site-link" onClick={() => MoveSitePage()}>Карта сайта</a>
                <a className="site-link" onClick={() => MoveOfferPage()}>Оферта</a>
                <a className="site-link" onClick={() => MovePolPage()}> Политика конфиденциальности</a>
                <a className="site-link" onClick={() => MovePolSogPage()}>Пользовательское соглашение</a>
                <a className="site-link" onClick={() => MoveAnsQstPage()}>Вопрос – ответ</a>
            </div>
        </footer>)


    if (!FB) {
        return <div>Loading...</div>;
    }
    const GetFeedback = FB === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <main className="main">
            <div className="container-feedback-1">
                <div className="heading">Мы ценим ваше мнение!</div>
                <div className="contentFB">
                    <div className="message">
                        Пожалуйста, оставьте свой отзыв о нашей мебельной компании. Мы
                        стремимся к постоянному улучшению качества наших услуг, и Ваш отзыв
                        нам очень важен. Будь то положительный опыт или замечания, мы готовы
                        выслушать каждого клиента.
                        <div className="thanks"> Спасибо, что выбрали нас!</div>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="review-containerFB">
                    <div className="review-head-text">Оставить свой отзыв</div>
                    <img className="container-9" src={FBtitle} />
                    <div className="review-container-2">
                        <div className="input-groupFB">
                            <div className="input-wrapperFB">
                                <div className="input-background"></div>
                                <input className="input_text-1" id="FBname" type="text" placeholder="Введите имя" />
                            </div>
                            <div className="input-wrapperFB">
                                <div className="input-background"></div>
                                <input className="input_text-1" id="FBphone" type="tel" placeholder="+7 (___)-___-__-__" />
                            </div>
                            <div className="input-wrapperFB">
                                <div className="input-background text-review"></div>
                                <textarea className="input_text-1" id="FB" type="text" placeholder="Введите ваш отзыв" />
                            </div>
                        </div>
                        <div className="button-section-send">
                            <button className="button-send" onClick={sendFeedBack}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-review">
                <div className="title-review-style">Отзывы наших клиентов</div>
                <div className="section-2">
                    <div className="review-contentFB">
                        {currentFeedback && (
                            <div className="block-review">
                                <div className="name_review">{currentFeedback.name}</div>
                                <div className="date_review">{currentFeedback.date}</div>
                                <div className="review-textFB">{currentFeedback.feedback}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bot">
                <img className="right button-5" src={ArrowR} onClick={mNid} />
                <img className="left button-5" src={ArrowL} onClick={pNid} />
            </div>
        </main>

    const employee = (
        <main className="main-employee">
            <div style={{ height: '60px' }} ></div>
            <div className="container-text-employee">
                <div className="title-text-employee">Приглашаем к сотрудничеству!</div>
                <div className="contentFB">
                    Мы открыты для партнерства с дизайнерами интерьеров, архитекторами,
                    оптовыми покупателями, строительными компаниями и всеми, кто разделяет
                    нашу страсть
                    <br />к качественной корпусной мебели.
                </div>
            </div>
            <div style={{ height: '10px' }} ></div>
            <div className="container-form-employee">
                <img className="image-form-employee" src={empformimg} />
                <div className="background-employee">
                    <div className="container-background-employee">
                        <div className="title-form-employee">
                            Почему с нами
                            <br />
                            выгодно сотрудничать
                        </div>
                        <div className="cont-emp">
                            <div className="content-emp">
                                <div className="icon-employee">
                                    <img className="icon" src={shildsvg} />
                                    <div className="text-pre-emp">Европейские технологические стандарты</div>
                                </div>
                                <div className="line"></div>
                            </div>
                            <div className="content-emp">
                                <div className="icon-employee">
                                    <img className="icon" src={pplsvg} />
                                    <div className="text-pre-emp">Индивидуальный подход<br />к каждому клиенту</div>

                                </div>
                                <div className="line"></div>
                            </div>
                            <div className="content-emp">
                                <div className="icon-employee">
                                    <img className="icon" src={sclsvg} />
                                    <div className="text-pre-emp">Современный подход<br />к работе и сотрудничеству</div>
                                </div>
                                <div className="line"></div>
                            </div>
                            <div className="content-emp">
                                <div className="icon-employee">
                                    <img className="icon" src={spksvg} />
                                    <div className="text-pre-emp">Более 15 лет на рынке</div>
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-emp-form">
                    <div className="content-emp-form">
                        <div className="content-form-emp-input">
                            <div className="background-form-input-emp">
                                <input className="text-form-input-emp" id="empName" placeholder="Введите имя" /></div>
                        </div>
                        <div className="content-form-emp-input">
                            <div className="background-form-input-emp">
                                <input className="text-form-input-emp" id="empPhone" placeholder="+7 (___)-___-__-__" /></div>
                        </div>
                        <div className="content-form-emp-input">
                            <div className="background-form-input-emp">
                                <input className="text-form-input-emp" id="empMail" placeholder="Введите Email" /></div>
                        </div>
                        <div className="content-form-emp-input">
                            <div className="background-form-input-emp">
                                <input className="text-form-input-emp" id="empLink" placeholder="Введите ссылку на портфолио" /></div>
                        </div>
                        <div className="content-form-emp-input">
                            <div className="background-form-input-emp">
                                <input className="text-form-input-emp" id="empCom" placeholder="Комментарий" /></div>
                        </div>
                    </div>
                    <button className="button-emp" onClick={sendEmploee}>
                        Отправить заявку
                    </button>
                </div>
            </div>
            <div className="contentFB">
                Присоединяйтесь к нашей команде профессионалов и создавайте уютные и
                функциональные интерьеры вместе с &quot;МИР&quot;! Для получения подробной
                информации о сотрудничестве, пожалуйста, свяжитесь с нами по контактным
                данным ниже или заполните форму.
            </div>
            <div className="option-container">
                <div className="option-title">Варианты сотрудничества</div>
                <div className="option-content-emp">
                    <div className="option-content">
                        <a href="#design"><img className="option-img-click" src={designs} /></a>
                        <div className="option-img-text">Дизайнеры</div>
                    </div>
                    <div className="option-content">
                        <a href="#architect"><img className="option-img-click" src={archit} /></a>
                        <div className="option-img-text">Архитекторы</div>
                    </div>
                    <div className="option-content">
                        <a href="#provider"><img className="option-img-click" src={provid} /></a>
                        <div className="option-img-text">Поставщики</div>
                    </div>
                </div>
            </div>
            <div className="container-employees" id="design">
                <div className="employee-content-container">
                    <div className="mask-group-emp">
                        <img className="content-img-left" src={desmain} />
                    </div>
                    <div className="emp-content-container">
                        <div className="title-content-emp">Дизайнерам</div>
                        <div className="text-content-emp">
                            <span>
                                <span className="emp-text-no-bolt">
                                    Компания &quot;Мир Интерьерных решений&quot; представляет собой
                                </span>
                                <span className="emp-text-bolt"> современное производство </span>
                                <span className="emp-text-no-bolt">
                                    корпусной мебели для дома
                                    <br />
                                    и офиса. У нас вы найдёте
                                </span>
                                <span className="emp-text-bolt"> широкий выбор </span>
                                <span className="emp-text-no-bolt">
                                    мебели
                                    <br />
                                    для вашего проекта.
                                    <br />
                                    <br />
                                </span>
                                <span className="emp-text-bolt">Дизайнеры</span>
                                <span className="emp-text-no-bolt"> - наши </span>
                                <span className="emp-text-bolt">важные партнёры,</span>
                                <span className="emp-text-no-bolt"> с которыми
                                    <br />
                                    мы создаём
                                </span>
                                <span className="emp-text-bolt"> уникальные интерьерные решения.<br />
                                </span>
                                <span className="emp-text-no-bolt">
                                    <br />
                                    Мы приглашаем Вас стать частью нашей мебельной компании и получить
                                    доступ к эксклюзивным коллекциям
                                    <br />
                                    и возможности для реализации ваших
                                </span>
                                <span className="emp-text-bolt"> творческих идей.</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="employee-content-container" id="architect">
                    <div className="emp-content-container">
                        <div className="title-content-emp">Архитекторам</div>
                        <div className="text-content-emp">
                            <span>
                                <span className="emp-text-no-bolt">Наша компания гордится своим</span>
                                <span className="emp-text-bolt"> богатым опытом</span>
                                <span className="emp-text-no-bolt">
                                    <br />
                                    и
                                </span>
                                <span className="emp-text-bolt"> профессионализмом </span>
                                <span className="emp-text-no-bolt">
                                    в области дизайна и производства мебели. Мы стремимся к постоянному
                                </span>
                                <span className="emp-text-bolt"> совершенствованию</span>
                                <span className="emp-text-no-bolt"> и </span>
                                <span className="emp-text-bolt">инновациям, </span>
                                <span className="emp-text-no-bolt">
                                    чтобы превзойти ожидания самых требовательных клиентов.
                                    <br />
                                </span>
                                <span className="emp-text-bolt">
                                    <br />
                                    Архитекторы
                                </span>
                                <span className="emp-text-no-bolt"> являются </span>
                                <span className="emp-text-bolt">неотъемлемой частью</span>
                                <span className="emp-text-no-bolt"> нашей команды <br />в создании </span>
                                <span className="emp-text-bolt">
                                    стильных и функциональных интерьеров.
                                    <br />
                                </span>
                                <span className="emp-text-no-bolt">
                                    <br />
                                    В рамках нашего сотрудничества архитекторы будут иметь возможность
                                    воплотить свои архитектурные концепции <br />с помощью нашей
                                </span>
                                <span className="emp-text-bolt"> высококачественной мебели.</span>
                            </span>
                        </div>
                    </div>
                    <div className="mask-group-emp">
                        <img className="content-img-right" src={arcmain} />
                    </div>
                </div>
                <div className="employee-content-container" id="provider">
                    <div className="mask-group-emp">
                        <img className="content-img-left" src={prvmain} />
                    </div>
                    <div className="emp-content-container">
                        <div className="title-content-emp">Поставщикам</div>
                        <div className="text-content-emp">
                            <span>
                                <span className="emp-text-no-bolt">
                                    Компания &quot;Мир Интерьерных Решений&quot; использует
                                    <br />
                                    для производства своих изделий
                                </span>
                                <span className="emp-text-bolt"> более 10000 видов материалов</span>
                                <span className="emp-text-no-bolt"> и</span>
                                <span className="emp-text-bolt"> комплектующих.</span>
                                <br />
                                <br />
                                <span className="emp-text-bolt">Поставщики</span>
                                <span className="_emp-text-no-bolt"> - наши </span>
                                <span className="emp-text-bolt">надежные партнеры,</span>
                                <span className="emp-text-no-bolt"> с которыми
                                    <br />
                                    мы сотрудничаем для обеспечения наших клиентов
                                </span>
                                <span className="emp-text-bolt"> качественной </span>
                                <span className="_emp-text-no-bolt">и</span> <span className="emp-text-bolt">разнообразной продукцией.</span>
                            </span>
                            <br />
                            <br />
                            <span className="emp-text-bolt">Основой </span>
                            <span className="emp-text-no-bolt">
                                для принятия решения о сотрудничестве служит необходимое
                            </span>
                            <span className="emp-text-bolt"> качество </span>
                            <span className="emp-text-no-bolt">материалов, конкурентная</span>
                            <span className="emp-text-bolt"> цена, </span>
                            <span className="emp-text-bolt">сроки </span>
                            <span className="emp-text-no-bolt">поставок и</span>
                            <span className="emp-text-bolt"> гарантийные обязательства </span>
                            <span className="emp-text-no-bolt">поставщика перед покупателем.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-text-employee-container">
                <div className="contentFB">
                    После ознакомления с ассортиментом нашей продукции, Вы можете отправить
                    коммерческое предложение по контактным данным ниже или заполнить форму.
                </div>
            </div>
            <div></div>
        </main>
    )

    const sitemap = (
        <main className="divCat">
            <div className="title-styleAlg">Карта сайта</div>
            <div className="categories">
                <div className="sitemap1">
                    <a className="zalupa" onClick={() => MoveCategPage(0)}><h1>Каталог</h1></a>
                    <ul>
                        <li><a className="zalupa" onClick={() => MoveCategPage(0)}>-Кухни</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(0)}>-Шкафы купе</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(0)}>-Распашные шкафы</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(1)}>-Гардеробные системы</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(1)}>-Гостиные</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(1)}>-Прихожие</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(2)}>-Спальные комнаты</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(2)}>-Детские комнаты</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(2)}>-Ванные комнаты</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(3)}>-Рабочие комнаты</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(3)}>-Кровати</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(3)}>-Комоды и тумбы</a></li>
                        <li><a className="zalupa" onClick={() => MoveCategPage(4)}>-Стеллажи и полки</a></li>
                        <li></li><li></li><li></li>
                        <li><a className="zalupa" href='#about-us' onClick={() => MoveMainPage()}><h1>О нас</h1></a></li>
                        <li><a className="zalupa" onClick={() => MoveFeedback()}><h1>Отзывы</h1></a></li>

                    </ul>
                </div>
                <div className="sitemap2">
                    <a className="zalupa" onClick={() => MoveMaterialPage(0)}><h1>Материалы</h1></a>
                    <ul>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(0)}>-Корпус изделия</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(0)}>-Фасадные материалы</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(0)}>-Столешницы</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(1)}>-Стеновые панели</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(1)}>-Наполнение дверей купе</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(1)}>-Фурнитура</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(2)}>-Ручки</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(2)}>-Бренды и производители</a></li>
                        <li><a className="zalupa" onClick={() => MoveMaterialPage(2)}>-Встроенная бытовая техника</a></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li>
                        <li><a className="zalupa" onClick={() => MoveAutorProjPage()}><h1>Авторские проекты</h1></a></li>
                        <li><a className="zalupa" onClick={() => MoveEmployee()}><h1>Сотрудничество</h1></a></li>
                        
                    </ul>
                </div>
                <div className="sitemap3">
                    <a className="zalupa" onClick={() => MoveAlgorthmPage(0)}><h1>Алгоритм работы</h1></a>
                    <ul>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(1)}>-Производство</a></li>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(1)}>-Сборка и монтаж</a></li>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(2)}>-Подъём</a></li>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(2)}>-Доставка</a></li>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(3)}>-Гарантия</a></li>
                        <li><a className="zalupa" onClick={() => MoveAlgorthmPage(3)}>-Замер</a></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li><a className="zalupa" href='#order-form' onClick={() => MoveMainPage()}> <h1>Вызов на замер</h1></a></li>
                        <li><a className="zalupa" onClick={() => MoveAnsQstPage()}><h1>Вопрос – ответ</h1></a></li>
                    </ul>
                </div>
            </div>

            {/*<div></div>*/}
            {/*<div className="categories1">*/}
            {/*    <div className="sitemap4">*/}
            {/*        <a href='#about-us' onClick={() => MoveMainPage()}><h1>О нас</h1></a>*/}
            {/*        <a onClick={() => MoveFeedback()}><h1>Отзывы</h1></a>*/}
            {/*    </div>*/}
            {/*    <div className="sitemap5">*/}
            {/*        <a onClick={() => MoveAutorProjPage()}><h1>Авторские проекты</h1></a>*/}
            {/*        <a onClick={() => MoveEmployee()}><h1>Сотрудничество</h1></a>*/}
            {/*    </div>*/}
            {/*    <div className="sitemap6">*/}
            {/*        <a href='#order-form' onClick={() => MoveMainPage()}> <h1>Вызов на замер</h1></a>*/}
            {/*        <a href='#footer'><h1>Контакты</h1></a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div></div>
        </main>
    )
    const privpol = (
        <div className="divCat">
            <div className="title-styleAlg">Политика конфиденциальности</div>
            <h3 className="oferta-text">
                <p className="p1">1. Общие положения</p>
                <p className="p1"> </p>
                <p className="p1">
                    Настоящая политика обработки персональных данных составлена в
                    соответствии с требованиями Федерального закона от 27.07.2006. №
                    152-ФЗ «О персональных данных» (далее — Закон о персональных
                    данных) и определяет порядок обработки персональных данных и
                    меры по обеспечению безопасности персональных данных,
                    предпринимаемые Мир Интерьерных Решений (далее — Оператор).
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    1.1. Оператор ставит своей важнейшей целью и условием
                    осуществления своей деятельности соблюдение прав и свобод
                    человека и гражданина при обработке его персональных данных, в
                    том числе защиты прав на неприкосновенность частной жизни,
                    личную и семейную тайну.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    1.2. Настоящая политика Оператора в отношении обработки
                    персональных данных (далее — Политика) применяется ко всей
                    информации, которую Оператор может получить о посетителях
                    веб-сайта https://world_of_interior.com.
                </p>
                <p className="p1"> </p>
                <p className="p1">2. Основные понятия, используемые в Политике</p>
                <p className="p1"> </p>
                <p className="p1">
                    2.1. Автоматизированная обработка персональных данных —
                    обработка персональных данных с помощью средств вычислительной
                    техники.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.2. Блокирование персональных данных — временное прекращение
                    обработки персональных данных (за исключением случаев, если
                    обработка необходима для уточнения персональных данных).
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.3. Веб-сайт — совокупность графических и информационных
                    материалов, а также программ для ЭВМ и баз данных,
                    обеспечивающих их доступность в сети интернет по сетевому адресу
                    https://world_of_interior.com.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.4. Информационная система персональных данных — совокупность
                    содержащихся в базах данных персональных данных и обеспечивающих
                    их обработку информационных технологий и технических средств.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.5. Обезличивание персональных данных — действия, в результате
                    которых невозможно определить без использования дополнительной
                    информации принадлежность персональных данных конкретному
                    Пользователю или иному субъекту персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.6. Обработка персональных данных — любое действие (операция)
                    или совокупность действий (операций), совершаемых с
                    использованием средств автоматизации или без использования таких
                    средств с персональными данными, включая сбор, запись,
                    систематизацию, накопление, хранение, уточнение (обновление,
                    изменение), извлечение, использование, передачу
                    (распространение, предоставление, доступ), обезличивание,
                    блокирование, удаление, уничтожение персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.7. Оператор — государственный орган, муниципальный орган,
                    юридическое или физическое лицо, самостоятельно или совместно с
                    другими лицами организующие и/или осуществляющие обработку
                    персональных данных, а также определяющие цели обработки
                    персональных данных, состав персональных данных, подлежащих
                    обработке, действия (операции), совершаемые с персональными
                    данными.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.8. Персональные данные — любая информация, относящаяся прямо
                    или косвенно к определенному или определяемому Пользователю
                    веб-сайта https://world_of_interior.com.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.9. Персональные данные, разрешенные субъектом персональных
                    данных для распространения, — персональные данные, доступ
                    неограниченного круга лиц к которым предоставлен субъектом
                    персональных данных путем дачи согласия на обработку
                    персональных данных, разрешенных субъектом персональных данных
                    для распространения в порядке, предусмотренном Законом о
                    персональных данных (далее — персональные данные, разрешенные
                    для распространения).
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.10. Пользователь — любой посетитель веб-сайта
                    https://world_of_interior.com.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.11. Предоставление персональных данных — действия,
                    направленные на раскрытие персональных данных определенному лицу
                    или определенному кругу лиц.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.12. Распространение персональных данных — любые действия,
                    направленные на раскрытие персональных данных неопределенному
                    кругу лиц (передача персональных данных) или на ознакомление с
                    персональными данными неограниченного круга лиц, в том числе
                    обнародование персональных данных в средствах массовой
                    информации, размещение в информационно-телекоммуникационных
                    сетях или предоставление доступа к персональным данным
                    каким-либо иным способом.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.13. Трансграничная передача персональных данных — передача
                    персональных данных на территорию иностранного государства
                    органу власти иностранного государства, иностранному физическому
                    или иностранному юридическому лицу.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    2.14. Уничтожение персональных данных — любые действия, в
                    результате которых персональные данные уничтожаются безвозвратно
                    с невозможностью дальнейшего восстановления содержания
                    персональных данных в информационной системе персональных данных
                    и/или уничтожаются материальные носители персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">3. Основные права и обязанности Оператора</p>
                <p className="p1"> </p>
                <p className="p1">3.1. Оператор имеет право:</p>
                <p className="p1">
                    — получать от субъекта персональных данных достоверные
                    информацию и/или документы, содержащие персональные данные;
                </p>
                <p className="p1">
                    — в случае отзыва субъектом персональных данных согласия на
                    обработку персональных данных, а также, направления обращения с
                    требованием о прекращении обработки персональных данных,
                    Оператор вправе продолжить обработку персональных данных без
                    согласия субъекта персональных данных при наличии оснований,
                    указанных в Законе о персональных данных;
                </p>
                <p className="p1">
                    — самостоятельно определять состав и перечень мер, необходимых и
                    достаточных для обеспечения выполнения обязанностей,
                    предусмотренных Законом о персональных данных и принятыми в
                    соответствии с ним нормативными правовыми актами, если иное не
                    предусмотрено Законом о персональных данных или другими
                    федеральными законами.
                </p>
                <p className="p1"> </p>
                <p className="p1">3.2. Оператор обязан:</p>
                <p className="p1">
                    — предоставлять субъекту персональных данных по его просьбе
                    информацию, касающуюся обработки его персональных данных;
                </p>
                <p className="p1">
                    — организовывать обработку персональных данных в порядке,
                    установленном действующим законодательством РФ;
                </p>
                <p className="p1">
                    — отвечать на обращения и запросы субъектов персональных данных
                    и их законных представителей в соответствии с требованиями
                    Закона о персональных данных;
                </p>
                <p className="p1">
                    — сообщать в уполномоченный орган по защите прав субъектов
                    персональных данных по запросу этого органа необходимую
                    информацию в течение 10 дней с даты получения такого запроса;
                </p>
                <p className="p1">
                    — публиковать или иным образом обеспечивать неограниченный
                    доступ к настоящей Политике в отношении обработки персональных
                    данных;
                </p>
                <p className="p1">
                    — принимать правовые, организационные и технические меры для
                    защиты персональных данных от неправомерного или случайного
                    доступа к ним, уничтожения, изменения, блокирования,
                    копирования, предоставления, распространения персональных
                    данных, а также от иных неправомерных действий в отношении
                    персональных данных;
                </p>
                <p className="p1">
                    — прекратить передачу (распространение, предоставление, доступ)
                    персональных данных, прекратить обработку и уничтожить
                    персональные данные в порядке и случаях, предусмотренных Законом
                    о персональных данных;
                </p>
                <p className="p1">
                    — исполнять иные обязанности, предусмотренные Законом о
                    персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    4. Основные права и обязанности субъектов персональных данных
                </p>
                <p className="p1"> </p>
                <p className="p1">4.1. Субъекты персональных данных имеют право:</p>
                <p className="p1">
                    — получать информацию, касающуюся обработки его персональных
                    данных, за исключением случаев, предусмотренных федеральными
                    законами. Сведения предоставляются субъекту персональных данных
                    Оператором в доступной форме, и в них не должны содержаться
                    персональные данные, относящиеся к другим субъектам персональных
                    данных, за исключением случаев, когда имеются законные основания
                    для раскрытия таких персональных данных. Перечень информации и
                    порядок ее получения установлен Законом о персональных данных;
                </p>
                <p className="p1">
                    — требовать от оператора уточнения его персональных данных, их
                    блокирования или уничтожения в случае, если персональные данные
                    являются неполными, устаревшими, неточными, незаконно
                    полученными или не являются необходимыми для заявленной цели
                    обработки, а также принимать предусмотренные законом меры по
                    защите своих прав;
                </p>
                <p className="p1">
                    — выдвигать условие предварительного согласия при обработке
                    персональных данных в целях продвижения на рынке товаров, работ
                    и услуг;
                </p>
                <p className="p1">
                    — на отзыв согласия на обработку персональных данных, а также,
                    на направление требования о прекращении обработки персональных
                    данных;
                </p>
                <p className="p1">
                    — обжаловать в уполномоченный орган по защите прав субъектов
                    персональных данных или в судебном порядке неправомерные
                    действия или бездействие Оператора при обработке его
                    персональных данных;
                </p>
                <p className="p1">
                    — на осуществление иных прав, предусмотренных законодательством
                    РФ.
                </p>
                <p className="p1"> </p>
                <p className="p1">4.2. Субъекты персональных данных обязаны:</p>
                <p className="p1">
                    — предоставлять Оператору достоверные данные о себе;
                </p>
                <p className="p1">
                    — сообщать Оператору об уточнении (обновлении, изменении) своих
                    персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    4.3. Лица, передавшие Оператору недостоверные сведения о себе,
                    либо сведения о другом субъекте персональных данных без согласия
                    последнего, несут ответственность в соответствии с
                    законодательством РФ.
                </p>
                <p className="p1"> </p>
                <p className="p1">5. Принципы обработки персональных данных</p>
                <p className="p1"> </p>
                <p className="p1">
                    5.1. Обработка персональных данных осуществляется на законной и
                    справедливой основе.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.2. Обработка персональных данных ограничивается достижением
                    конкретных, заранее определенных и законных целей. Не
                    допускается обработка персональных данных, несовместимая с
                    целями сбора персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.3. Не допускается объединение баз данных, содержащих
                    персональные данные, обработка которых осуществляется в целях,
                    несовместимых между собой.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.4. Обработке подлежат только персональные данные, которые
                    отвечают целям их обработки.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.5. Содержание и объем обрабатываемых персональных данных
                    соответствуют заявленным целям обработки. Не допускается
                    избыточность обрабатываемых персональных данных по отношению к
                    заявленным целям их обработки.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.6. При обработке персональных данных обеспечивается точность
                    персональных данных, их достаточность, а в необходимых случаях и
                    актуальность по отношению к целям обработки персональных данных.
                    Оператор принимает необходимые меры и/или обеспечивает их
                    принятие по удалению или уточнению неполных или неточных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    5.7. Хранение персональных данных осуществляется в форме,
                    позволяющей определить субъекта персональных данных, не дольше,
                    чем этого требуют цели обработки персональных данных, если срок
                    хранения персональных данных не установлен федеральным законом,
                    договором, стороной которого, выгодоприобретателем или
                    поручителем по которому является субъект персональных данных.
                    Обрабатываемые персональные данные уничтожаются либо
                    обезличиваются по достижении целей обработки или в случае утраты
                    необходимости в достижении этих целей, если иное не
                    предусмотрено федеральным законом.
                </p>
                <p className="p1"> </p>
                <p className="p1">6. Цели обработки персональных данных</p><br/>
                <p className="p1">
                    Цель обработки: информирование Пользователя посредством отправки
                    электронных писем
                </p>
                <p className="p1">Персональные данные:</p>
                <p className="p1">·         фамилия, имя, отчество</p>
                <p className="p1">·         электронный адрес</p>
                <p className="p1">·         номера телефонов</p>
                <p className="p1">·         год, месяц, дата и место рождения</p>
                <p className="p1">
                    Правовые основания: договоры, заключаемые между оператором и
                    субъектом персональных данных
                </p>
                <p className="p91">
                    Виды обработки персональных данных: Сбор, запись,
                    систематизация, накопление, хранение, уничтожение и
                    обезличивание персональных данных, Отправка информационных писем
                    на адрес электронной почты
                </p>
                <p className="p1"> </p>
                <p className="p1">7. Условия обработки персональных данных</p>
                <p className="p1"> </p>
                <p className="p1">
                    7.1. Обработка персональных данных осуществляется с согласия
                    субъекта персональных данных на обработку его персональных
                    данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.2. Обработка персональных данных необходима для достижения
                    целей, предусмотренных международным договором Российской
                    Федерации или законом, для осуществления возложенных
                    законодательством Российской Федерации на оператора функций,
                    полномочий и обязанностей.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.3. Обработка персональных данных необходима для осуществления
                    правосудия, исполнения судебного акта, акта другого органа или
                    должностного лица, подлежащих исполнению в соответствии с
                    законодательством Российской Федерации об исполнительном
                    производстве.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.4. Обработка персональных данных необходима для исполнения
                    договора, стороной которого либо выгодоприобретателем или
                    поручителем, по которому является субъект персональных данных, а
                    также для заключения договора по инициативе субъекта
                    персональных данных или договора, по которому субъект
                    персональных данных будет являться выгодоприобретателем или
                    поручителем.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.5. Обработка персональных данных необходима для осуществления
                    прав и законных интересов оператора или третьих лиц либо для
                    достижения общественно значимых целей при условии, что при этом
                    не нарушаются права и свободы субъекта персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.6. Осуществляется обработка персональных данных, доступ
                    неограниченного круга лиц к которым предоставлен субъектом
                    персональных данных либо по его просьбе (далее — общедоступные
                    персональные данные).
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    7.7. Осуществляется обработка персональных данных, подлежащих
                    опубликованию или обязательному раскрытию в соответствии с
                    федеральным законом.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8. Порядок сбора, хранения, передачи и других видов обработки
                    персональных данных
                </p>
                <p className="p1">
                    Безопасность персональных данных, которые обрабатываются
                    Оператором, обеспечивается путем реализации правовых,
                    организационных и технических мер, необходимых для выполнения в
                    полном объеме требований действующего законодательства в области
                    защиты персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.1. Оператор обеспечивает сохранность персональных данных и
                    принимает все возможные меры, исключающие доступ к персональным
                    данным неуполномоченных лиц.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.2. Персональные данные Пользователя никогда, ни при каких
                    условиях не будут переданы третьим лицам, за исключением
                    случаев, связанных с исполнением действующего законодательства
                    либо в случае, если субъектом персональных данных дано согласие
                    Оператору на передачу данных третьему лицу для исполнения
                    обязательств по гражданско-правовому договору.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.3. В случае выявления неточностей в персональных данных,
                    Пользователь может актуализировать их самостоятельно, путем
                    направления Оператору уведомление на адрес электронной почты
                    Оператора world_of_interior@mail.ru с пометкой «Актуализация
                    персональных данных».
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.4. Срок обработки персональных данных определяется достижением
                    целей, для которых были собраны персональные данные, если иной
                    срок не предусмотрен договором или действующим
                    законодательством.
                </p>
                <p className="p1">
                    Пользователь может в любой момент отозвать свое согласие на
                    обработку персональных данных, направив Оператору уведомление
                    посредством электронной почты на электронный адрес Оператора
                    world_of_interior@mail.ru с пометкой «Отзыв согласия на
                    обработку персональных данных».
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.5. Вся информация, которая собирается сторонними сервисами, в
                    том числе платежными системами, средствами связи и другими
                    поставщиками услуг, хранится и обрабатывается указанными лицами
                    (Операторами) в соответствии с их Пользовательским соглашением и
                    Политикой конфиденциальности. Субъект персональных данных и/или
                    с указанными документами. Оператор не несет ответственность за
                    действия третьих лиц, в том числе указанных в настоящем пункте
                    поставщиков услуг.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.6. Установленные субъектом персональных данных запреты на
                    передачу (кроме предоставления доступа), а также на обработку
                    или условия обработки (кроме получения доступа) персональных
                    данных, разрешенных для распространения, не действуют в случаях
                    обработки персональных данных в государственных, общественных и
                    иных публичных интересах, определенных законодательством РФ.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.7. Оператор при обработке персональных данных обеспечивает
                    конфиденциальность персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.8. Оператор осуществляет хранение персональных данных в форме,
                    позволяющей определить субъекта персональных данных, не дольше,
                    чем этого требуют цели обработки персональных данных, если срок
                    хранения персональных данных не установлен федеральным законом,
                    договором, стороной которого, выгодоприобретателем или
                    поручителем, по которому является субъект персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    8.9. Условием прекращения обработки персональных данных может
                    являться достижение целей обработки персональных данных,
                    истечение срока действия согласия субъекта персональных данных,
                    отзыв согласия субъектом персональных данных или требование о
                    прекращении обработки персональных данных, а также выявление
                    неправомерной обработки персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    9. Перечень действий, производимых Оператором с полученными
                    персональными данными
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    9.1. Оператор осуществляет сбор, запись, систематизацию,
                    накопление, хранение, уточнение (обновление, изменение),
                    извлечение, использование, передачу (распространение,
                    предоставление, доступ), обезличивание, блокирование, удаление и
                    уничтожение персональных данных.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    9.2. Оператор осуществляет автоматизированную обработку
                    персональных данных с получением и/или передачей полученной
                    информации по информационно-телекоммуникационным сетям или без
                    таковой.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    10. Трансграничная передача персональных данных
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    10.1. Оператор до начала осуществления деятельности по
                    трансграничной передаче персональных данных обязан уведомить
                    уполномоченный орган по защите прав субъектов персональных
                    данных о своем намерении осуществлять трансграничную передачу
                    персональных данных (такое уведомление направляется отдельно от
                    уведомления о намерении осуществлять обработку персональных
                    данных).
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    10.2. Оператор до подачи вышеуказанного уведомления, обязан
                    получить от органов власти иностранного государства, иностранных
                    физических лиц, иностранных юридических лиц, которым планируется
                    трансграничная передача персональных данных, соответствующие
                    сведения.
                </p>
                <p className="p1"> </p>
                <p className="p1">11. Конфиденциальность персональных данных</p>
                <p className="p1">
                    Оператор и иные лица, получившие доступ к персональным данным,
                    обязаны не раскрывать третьим лицам и не распространять
                    персональные данные без согласия субъекта персональных данных,
                    если иное не предусмотрено федеральным законом.
                </p>
                <p className="p1"> </p>
                <p className="p1">12. Заключительные положения</p>
                <p className="p1"> </p>
                <p className="p1">
                    12.1. Пользователь может получить любые разъяснения по
                    интересующим вопросам, касающимся обработки его персональных
                    данных, обратившись к Оператору с помощью электронной почты
                    world_of_interior@mail.ru.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    12.2. В данном документе будут отражены любые изменения политики
                    обработки персональных данных Оператором. Политика действует
                    бессрочно до замены ее новой версией.
                </p>
                <p className="p1"> </p>
                <p className="p1">
                    12.3. Актуальная версия Политики в свободном доступе расположена
                    в сети Интернет по адресу https://world_of_interior.com/policy.
                </p>
            </h3>
        </div>
    )
    const offer = (
        <div className="divCat">
            <div className="title-styleAlg">Оферта</div>
            <div className="contentFB">
                <span>
                    <span className="bold-title-text">Уважаемые покупатели! </span>
                    Мы приглашаем вас ознакомиться с нашей офертой, чтобы быть в курсе всех
                    условий и преимуществ, которые мы предлагаем. В оферте содержатся важные
                    детали о наших товарах и услугах, специальных предложениях и правилах
                    пользования сервисом.
                    <br />
                    <br />
                    Мы ценим ваше доверие и стремимся к прозрачным и честным отношениям с
                    нашими клиентами.
                    <br />
                    Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную
                    информацию.
                </span>
            </div>
            <div className="oferta-text">
                <span>
                    1. Общие положения
                    <br />
                    <br />
                    1.1. АО МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ», именуемое в дальнейшем «Продавец»,
                    публикует Публичную оферту о продаже товаров по образцам, представленным
                    на официальном интернет-сайте Продавца ...адрес сайта... .
                    <br />
                    <br />
                    1.2. В соответствии со статьей 437 Гражданского Кодекса Российской
                    Федерации (ГК РФ) данный документ является публичной офертой, и в случае
                    принятия изложенных ниже условий физическое лицо, производящее акцепт
                    этой оферты, осуществляет оплату Товара
                    <br />
                    Продавца в соответствии с условиями настоящего Договора. В соответствии
                    с пунктом 3 статьи 438 ГК РФ, оплата Товара Покупателем является
                    акцептом оферты, что считается равносильным заключению Договора на
                    условиях, изложенных в оферте.
                    <br />
                    <br />
                    1.3. На основании вышеизложенного, внимательно ознакомьтесь с текстом
                    публичной оферты, и если вы не согласны с каким-либо пунктом оферты, Вам
                    предлагается отказаться от покупки Товаров или использования Услуг,
                    предоставляемых Продавцом.
                    <br />
                    <br />
                    1.4. В настоящей оферте, если контекст не требует иного, нижеприведенные
                    термины имеют следующие значения:
                    <br />

                    «Оферта» – публичное предложение Продавца, адресованное любому
                    физическому лицу (гражданину), заключить с ним договор купли-продажи
                    (далее – «Договор») на существующих условиях, содержащихся в Договоре,
                    включая все его приложения;
                    <br />
                    «Покупатель» – гражданин, имеющий намерение заказать или приобрести либо
                    заказывающий, приобретающий или использующий товары исключительно для
                    личных, семейных, домашних и иных нужд, не связанных с осуществлением
                    предпринимательской деятельности;
                    <br />
                    «Продавец» - организация/юридическое лицо, осуществляющее продажу
                    товаров дистанционным способом;
                    <br />
                    «Акцепт» – полное и безоговорочное принятие Покупателем условий
                    Договора;
                    <br />
                    «Товар» - перечень наименований ассортимента на официальном
                    интернет-сайте www.shatura.com
                    <br />
                    «Заказ» – отдельные позиции из ассортиментного перечня Товара, указанные
                    Покупателем при оформлении заявки на интернет-сайте или через менеджера
                    интернет магазина;
                    <br />
                    «Менеджер Интернет магазина» – сотрудник организации, предоставляющий
                    Покупателю информационно-консультационные услуги по оформлению
                    предварительного заказа Товара;
                    <br/>
                    <br/>
                    2. Предмет договора
                    <br />
                    <br />
                    2.1. Продавец продает Товар - мебель бытовую в ассортименте, в том числе
                    наборы и гарнитуры, состоящие из упаковочных мест, в разобранном виде,
                    отдельные упаковочные изделия, сопутствующую продукцию сторонних
                    производителей и т.п., как уже имеющиеся у Продавца в момент заключения
                    договора, так и товар, который только будет создан или приобретен продавцом
                    в будущем с учетом индивидуальных запросов Покупателя, в соответствии с
                    действующим прейскурантом, опубликованным на интернет-сайте Продавца и в
                    каталоге www.shatura.com, а Покупатель производит оплату и принимает Товар в
                    соответствии с условиями настоящего Договора.
                    <br />
                    <br />
                    2.2. Продавец передает в собственность, а Покупатель принимает и оплачивает
                    в установленный срок «Товар» в
                    <br />
                    количестве, качестве, ассортименте и на условиях в соответствии с заказом
                    через сеть Интернет.
                    <br />
                    <br />
                    2.3. Продавец имеет право в течение 5 (пяти) рабочих дней с момента
                    заключения настоящего Договора отказаться от его выполнения (расторгнуть
                    настоящий Договор) в следующих случаях:
                    <br />
                    из-за неправильно указанных артикулов, характеристик, цены товара в
                    буклетах, каталогах, листовках, которые не действуют на момент заключения
                    договора;
                    <br />
                    из-за неправильно указанных Покупателем размеров, количества товара;
                    <br />
                    из-за технической и технологической невозможности произвести товар, в т.ч.
                    из-за отсутствия сырья и материалов для его производства.
                    <br />
                    В этом случае Продавец обязан до окончания указанного выше срока уведомить
                    Покупателя, предложив ему внести изменения в договор. Если Покупатель
                    отказывается от предложений Продавца, то вся внесенная Покупателем
                    предоплата должна быть ему возвращена в течение 3 (трех) банковских дней с
                    момента обращения к Продавцу Покупателя.
                    <br />
                    <br />
                    2.4. Настоящий Договор и приложения к нему являются официальными документами
                    Продавца и неотъемлемой частью оферты.
                    <br />
                    <br />
                    3. Оформление заказа
                    <br />
                    <br />
                    3.1. Заказ Товара осуществляется Покупателем через менеджера интернет
                    магазина по телефону 8-927-904-97-29. При заказе товара Продавца Покупатель
                    обязуется предоставить следующую регистрационную информацию о себе:
                    <br />
                    фамилия, имя, отчество (по-русски);
                    <br />
                    адрес электронной почты;
                    <br />
                    контактный телефон;
                    <br />
                    адрес разгрузки (место доставки) при оформлении услуг по доставке и сборке
                    Товара.
                    <br />
                    В соответствии со статьями 6, 9 Федерального закона от 27.07.2006 №152-ФЗ «О
                    персональных данных» Покупатель даёт свое согласие на обработку персональных
                    данных, в том числе совершаемых с использованием средств автоматизации или
                    без использования таких средств с персональными данными, включая сбор,
                    запись, систематизацию, накопление, хранение, уточнение (обновление,
                    изменение), извлечение, использование, передачу (распространение,
                    предоставление, доступ), обезличивание, блокирование, удаление, уничтожение
                    персональных данных, предоставляемых Продавцу с целью выполнения им всех
                    своих обязательств по заключенному договору купли-продажи товаров,
                    оформления и осуществления услуг по доставке и сборке приобретенных товаров,
                    распространения информационных и рекламных сообщений (по SMS, электронной
                    почте, телефону, иным средствам связи), получения обратной связи. Настоящее
                    согласие действует с момента заключения договора и предоставлено Покупателем
                    на неопределенный срок. Настоящее согласие может быть отозвано Покупателем в
                    любой момент путем направления письменного требования по юридическому адресу
                    Продавца либо направления такого требования по адресу электронной почты
                    Продавца в форматах, поддерживаемых MS Word, MS Excel, PDF.
                    <br />
                    <br />
                    3.2. При оформлении Заказа через менеджера интернет магазина Покупатель
                    обязуется предоставить информацию, указанную в п. 3.1. настоящего Договора.
                    Принятие Покупателем условий настоящего Договора осуществляется посредством
                    внесения Покупателем соответствующих данных в регистрационную форму при
                    оформлении Заказа через менеджера интернет магазина. Покупатель имеет право
                    редактировать регистрационную информацию о себе. Менеджер интернет магазина
                    не изменяет и не редактирует регистрационную информацию о Покупателе без
                    согласия последнего. Продавец обязуется не сообщать данные Покупателя,
                    указанные при регистрации на сайте www.shatura.com и при оформлении Заказа,
                    лицам, не имеющим отношения к исполнению Заказа. После оформления Заказа
                    через менеджера интернет магазина, Покупатель получает уникальный
                    идентификационный номер заказа. Утвердив Заказ выбранного Товара, Покупатель
                    предоставляет менеджеру интернет магазина необходимую информацию в
                    соответствии с порядком, указанном в п. 3.1. настоящего Договора.
                    <br />
                    <br />
                    3.3. Продавец и менеджер интернет магазина не несут ответственности за
                    содержание и достоверность информации, предоставленной Покупателем при
                    оформлении Заказа.
                    <br />
                    <br />
                    3.4. Покупатель несёт ответственность за достоверность предоставленной
                    информации при оформлении Заказа.
                    <br />
                    <br />
                    3.5. Оплата Покупателем оформленного на интернет-сайте Заказа означает
                    согласие Покупателя с условиями настоящего Договора. День оплаты Заказа
                    является датой заключения Договора купли-продажи между Продавцом и
                    Покупателем.
                    <br />
                    <br />
                    4. Сроки исполнения заказа
                    <br />
                    <br />
                    4.1 Продавец обязуется передать, а Покупатель обязуется принять Товар: - по
                    предварительно оплаченному Товару, уже имеющегося у Продавца в момент
                    заключения договора, в течение 21 рабочих дней со дня поступления денежных
                    средств от Покупателя на расчетный счет Продавца в размере полной стоимости
                    Товара. Продавец оставляет за собой право при наличии Товара, имеющегося в
                    момент заключения настоящего договора, предложить Покупателю сократить срок
                    его передачи. В случаях, связанных с форс-мажорными обстоятельствами,
                    высоким сезонным спросом на отдельные композиции мебели, компания оставляет
                    за собой право осуществить передачу товара в срок до 45 рабочих дней.
                    <br />
                    <br />
                    4.2. Товар считается переданным Продавцом и принятым Покупателем или
                    официальным его представителем в момент подписания Сторонами товарной
                    накладной ТОРГ-12, либо УПД. Обязанность Продавца передать Товар Покупателю
                    считается исполненной в момент подписания Сторонами товарной накладной
                    ТОРГ-12, либо УПД.
                    <br />
                    <br />
                    4.3. Право собственности на Товар переходит к Покупателю в момент подписания
                    Сторонами товарной накладной ТОРГ-12, либо УПД.
                    <br />
                    <br />
                    4.4. При передаче Товара Покупателю одновременно Продавец передает путем
                    вложения в одну из упаковок Товара следующую информацию, которую Покупатель
                    обязан сохранить, и в случае необходимости выполнять:
                    <br />
                    гарантийный срок, если он установлен;
                    <br />
                    правила и условия эффективного и безопасного использования товаров;
                    <br />
                    срок службы, а также сведения о необходимых действиях потребителя по
                    истечении указанных сроков и возможных последствиях при невыполнении таких
                    действий, если товары (работы) по истечении указанных сроков представляют
                    опасность для жизни, здоровья и имущества потребителя или становятся
                    непригодными для использования по назначению;
                    <br />
                    адрес (место нахождения), фирменное наименование изготовителя;
                    <br />
                    инструкцию по эксплуатации и сборке Товара.
                    <br />
                    На момент заключения договора (оплаты товара) Покупатель подтверждает, что
                    информация об обязательном подтверждении соответствия приобретаемых товаров
                    предоставлена Покупателю и размещена на официальном сайте www.shatura.com. в
                    разделе «Покупателю» «Сертификаты на продукцию».
                    <br />
                    <br />
                    4.5. Местом передачи Товара является:
                    <br />
                    <br />
                    4.5.1. при самовывозе – склад Продавца.
                    <br />
                    <br />
                    4.5.2. при доставке Товара Продавцом на основании Заказа - адрес разгрузки
                    до квартиры Покупателя.
                    <br />
                    <br />
                    4.6. Предусмотрено бесплатное хранение Товара на складе Продавца в течение 5
                    календарных дней с момента уведомления покупателя менеджером интернет
                    магазина о наличии Товара на складе Продавца. За каждый последующий день
                    Покупатель несет ответственность за несвоевременную выборку Товара со склада
                    Покупателя (самовывоз) и выплачивает неустойку в размере 0,5% от суммы
                    Товара за каждый день просрочки выборки.
                    <br />
                    <br />
                    4.7. Товар передается Покупателю в упакованном виде. При приеме Товара
                    Покупатель обязан проверить целостность упаковки Товара. Если Товар содержит
                    детали, комплектующие, изготовленные из стекла, зеркал, то Покупатель обязан
                    при приеме Товара вскрыть упаковку и проверить их целостность и качество.
                    <br />
                    <br />
                    4.8. В течение гарантийного срока Покупателю рекомендуется сохранять
                    документы, подтверждающие оплату товара, товарную накладную ТОРГ-12, либо
                    УПД ярлыки с заводской упаковки Товара, инструкции по сборке Товара,
                    гарантийный талон. 4.2. Заказ считается доставленным в момент его передачи
                    Покупателю. Принимая Товар, Покупатель подтверждает исполнение Заказа.
                    <br />
                    <br />
                    4.9. В случае предоставления Покупателем недостоверной информации об его
                    контактных данных Продавец за ненадлежащее исполнение Заказа ответственности
                    не несет.
                    <br />
                    <br />
                    4.10. В случае ненадлежащего исполнения доставки Заказа по вине Продавца
                    повторная доставка Заказа осуществляется бесплатно.
                    <br />
                    <br />
                    5. Оплата заказа
                    <br />
                    <br />
                    5.1. Покупатель вносит оплату за Товар на расчетный счет Продавца, указанный
                    в п. 9 настоящего Договора, либо оплачивает в момент доставки товара
                    Покупателю, представителю Продавца.
                    <br />
                    Обязанность Покупателя по оплате Товара считается исполненной в момент
                    поступления денег на расчетный счет Продавца или оплата через кассу в
                    размере 100% (ста процентов) стоимости Товара.
                    <br />
                    <br/>
                    5.2. Цена на каждую позицию Товара узнаётся у менеджера интернет магазина.
                    <br/>
                    <br/>

                    6. Возврат заказа
                    <br />
                    <br />
                    6.1. Права, обязанности Сторон, а также требования Покупателя, связанные с
                    обнаружением недостатков переданного по настоящему договору Товара
                    регулируются действующим законодательством РФ.
                    <br />
                    <br />
                    6.2. В случае выявления каких-либо недостатков купленного товара, Покупатель
                    оформляет письменное заявление на имя директора Интернет-магазина, в котором
                    он купил Товар, в соответствии с утвержденной формой и отправляет на
                    электронную почту world_of_interior@mail.ru - объем письма не может
                    превышать 4 мб.
                    <br />
                    <br />
                    6.3. Обращения Покупателя к Продавцу о нарушении действующего
                    законодательства РФ должны быть оформлены в письменном виде и направлены по
                    адресу: 443047, Самарская область, город Самара, ул. Уральская, д. 34, МК
                    «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ», на электронную почту world_of_interior@mail.ru -
                    объем письма не может превышать 4 мб.
                    <br />
                    <br />
                    6.4. На основании Постановления Правительства РФ от 19.01.98г. №55 мебель
                    надлежащего качества, не подошедшая по цвету, размеру, габариту и фасону
                    обмену и возврату не подлежит.
                    <br />
                    <br />
                    6.5. В соответствии с п. 4. ст. 26.1. Закона РФ № 2300-I «О Защите прав
                    потребителей», Покупатель вправе отказаться от заказанного Товара в любое
                    время до момента исполнения Заказа.
                    <br />
                    <br />
                    6.6. Покупатель не вправе отказаться от товара надлежащего качества,
                    имеющего индивидуально-определенные
                    <br />
                    свойства, если указанный товар может быть использован исключительно
                    приобретающим его потребителем.
                    <br />
                    <br />
                    6.7. В соответствии со ст. 22 Закона РФ № 2300-I «О Защите прав
                    потребителей», уплаченная Покупателем сумма за Товар ненадлежащего качества
                    подлежит возврату Покупателю в течение 10 календарных дней с момента
                    предъявления соответствующего требования. В случае, если Товар был оплачен
                    через систему электронных платежей, то возврат денежных средств
                    осуществляется на электронный счет Покупателя в течение 5-ти рабочих дней.
                    <br />
                    <br />
                    7. Права, обязанности и ответственность сторон
                    <br />
                    <br />
                    7.1. Продавец не несет ответственности за ненадлежащее использование товаров
                    Покупателем, заказанных через менеджера интернет магазина.
                    <br />
                    <br />
                    7.2. Продавец вправе передавать свои права и обязанности по исполнению
                    Заказов третьим лицам.
                    <br />
                    <br />
                    7.3. Продавец имеет право на осуществление записи телефонных переговоров с
                    Покупателем. В соответствии с п. 4 ст. 16 Федерального закона «Об
                    информации, информационных технологиях и о защите информации» Продавец
                    обязуется: предотвращать попытки несанкционированного доступа к информации
                    и/или передачу ее лицам, не имеющим непосредственного отношения к исполнению
                    Заказов; своевременно обнаруживать и пресекать такие факты. Телефонные
                    разговоры записываются в целях осуществления контроля деятельности менеджера
                    интернет магазина и контроля качества исполнения Заказов.
                    <br />
                    <br />
                    7.4. Покупатель обязуется не использовать товар, заказанный через менеджера
                    интернет магазина, в предпринимательских целях.
                    <br />
                    <br />
                    7.5. Право собственности на Заказ, а также риск его случайной утраты или
                    повреждения переходят к Покупателю с момента получения Товара.
                    <br />
                    <br />
                    8. Прочие условия
                    <br />
                    <br />
                    8.1. Покупателю могут быть предоставлены дополнительные услуги по сборке,
                    установке, и доставке Товара. Указанные услуги предоставляются Покупателю
                    при условии приобретения Товара у Продавца.
                    <br />
                    <br />
                    8.2. Претензии по целостности и сохранности частей Товара: деталей и
                    комплектующих из стекла и /или зеркал, не принимаются после передачи Товара
                    Покупателю или его официальному представителю.
                    <br />
                    <br />
                    8.3. Официальный представитель Покупателя должен иметь доверенность на право
                    получения Товара у Продавца.
                    <br />
                    <br />
                    8.4. Стороны договорились, что представленная на сайте Продавца информация
                    достаточна для обеспечения Покупателю возможности правильного выбора товара
                    и в совокупности составляет объем информации, предусмотренный пунктом 2
                    статьи 10 Закона РФ от 07.02.1992 №2300-1 «О защите прав потребителей».

                    <br />
                    <br />
                    9. Юридическая информация
                    <br />
                </span>
            </div >


            <div className="contconteiner">

                <div className="cont-right">
                    <div className="text-right">Наименование</div>
                </div>

                <div className="cont-left">
                    <div className="text-left">Сведения о контрагенте</div>
                </div>

            </div>
            <div className="oferta-table">
                <div className="table-row">
                    <div className="oferta_container">
                        <div className="col-left">Организационно-правовая форма</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>

                <div className="table-row">
                    <div className="oferta_container">
                        <div className="col-left">Фирменное наименование</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    <div className="oferta_container">
                        <div className="col-left">Юридический адрес</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">Адрес местонахождения (фактический)</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">ИНН/КПП</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">Банк</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">р/с</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">к/с</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">БИК</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>
                    </div>
                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    
                    <div className="oferta_container">
                        <div className="col-left">Адрес в интернет</div>
                        <div className="col-right">МК «МИР ИНТЕРЬЕРНЫХ РЕШЕНИЙ»</div>

                    </div>

                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    <div className="oferta_container">
                        <div className="col-left">Контактный телефон</div>
                        <div className="col-right">+7 (927)-904-97-29</div>
                    </div>

                    <div className="line-oferta"></div>
                </div>
                <div className="table-row">
                    <div className="oferta_container">
                        <div className="col-left">E-mail компании</div>
                        <div className="col-right">world_of_interior@mail.ru</div>
                    </div>

                    <div className="line-oferta"></div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
           
        </div>
    )
    const polsog = (
        <div className="divCat">
            <div className="title-styleAlg">Пользовательское соглашение</div>
            <div
                className="oferta-text"
            >
                Настоящий документ «Пользовательское соглашение» (далее - Соглашение)
                представляет собой предложение ИП Морозовой К., размещенное на сайте
                (ссылка) (далее - «Сайт»), заключить договор на изложенных ниже условиях
                Соглашения.
                <br />

                <br />
                1. Общие условия
                <br />
                <br />
                1.1. Использование материалов и сервисов Сайта регулируется нормами
                действующего законодательства Российской Федерации.
                <br />
                <br />
                1.2. Настоящее Соглашение является публичной офертой. Получая доступ к
                материалам Сайта Пользователь считается присоединившимся к настоящему
                Соглашению.
                <br />
                <br />
                1.3. Администрация Сайта вправе в любое время в одностороннем порядке
                изменять условия настоящего Соглашения. Такие изменения вступают в силу по
                истечении 3 (Трех) дней с момента размещения новой версии Соглашения на
                сайте. При несогласии Пользователя с внесенными изменениями он обязан
                отказаться от доступа к Сайту, прекратить использование материалов и
                сервисов Сайта.
                <br />
                <br />
                1.4. Цены на товары, представленные на страницах сайта www.shatura.com,
                могут иметь различные цены в зависимости от географического региона
                продажи. Точную цену уточняйте у оператора.
                <br />
                <br />
                2. Обязательства Пользователя
                <br />
                <br />
                2.1. Пользователь соглашается не предпринимать действий, которые могут
                рассматриваться как нарушающие российское законодательство или нормы
                международного права, в том числе в сфере интеллектуальной собственности,
                авторских и/или смежных правах, а также любых действий, которые приводят
                или могут привести к нарушению нормальной работы Сайта и сервисов Сайта.
                <br />
                <br />
                2.2. Использование материалов Сайта без согласия правообладателей не
                допускается (статья 1270 ГК РФ). Для правомерного использования материалов
                Сайта необходимо заключение лицензионных договоров (получение лицензий) от
                Правообладателей.
                <br />
                <br />
                2.3. При цитировании материалов Сайта, включая охраняемые авторские
                произведения, ссылка на Сайт обязательна (подпункт 1 пункта 1 статьи 1274
                ГК РФ).
                <br />
                <br />
                2.4. Комментарии и иные записи Пользователя на Сайте не должны вступать в
                противоречие с требованиями законодательства Российской Федерации и
                общепринятых норм морали и нравственности.
                <br />
                <br />
                2.5. Пользователь предупрежден о том, что Администрация Сайта не несет
                ответственности за посещение и использование им внешних ресурсов, ссылки
                на которые могут содержаться на сайте.
                <br />
                <br />
                2.6. Пользователь согласен с тем, что Администрация Сайта не несет
                ответственности и не имеет прямых или косвенных обязательств перед
                Пользователем в связи с любыми возможными или возникшими потерями или
                убытками, связанными с любым содержанием Сайта, регистрацией авторских
                прав и сведениями о такой регистрации, товарами или услугами, доступными
                на или полученными через внешние сайты или ресурсы либо иные контакты
                Пользователя, в которые он вступил, используя размещенную на Сайте
                информацию или ссылки на внешние ресурсы.
                <br />
                <br />
                2.7. Пользователь принимает положение о том, что все материалы и сервисы
                Сайта или любая их часть могут сопровождаться рекламой. Пользователь
                согласен с тем, что Администрация Сайта не несет какой-либо
                ответственности и не имеет каких-либо обязательств в связи с такой
                рекламой.
                <br />
                <br />
                3. Прочие условия
                <br />
                <br />
                3.1. Все возможные споры, вытекающие из настоящего Соглашения или
                связанные с ним, подлежат разрешению в соответствии с действующим
                законодательством Российской Федерации.
                <br />
                <br />
                3.2. Ничто в Соглашении не может пониматься как установление между
                Пользователем и Администрации Сайта агентских отношений, отношений
                товарищества, отношений по совместной деятельности, отношений личного
                найма, либо каких-то иных отношений, прямо не предусмотренных Соглашением.
                <br />
                <br />
                3.3. Признание судом какого-либо положения Соглашения недействительным или
                не подлежащим принудительному исполнению не влечет недействительности иных
                положений Соглашения.
                <br />
                <br />
                3.4. Бездействие со стороны Администрации Сайта в случае нарушения
                кем-либо из Пользователей положений Соглашения не лишает Администрацию
                Сайта права предпринять позднее соответствующие действия в защиту своих
                интересов и защиту авторских прав на охраняемые в соответствии с
                законодательством материалы Сайта.
                <br />
                <br />
                Пользователь подтверждает, что ознакомлен со всеми пунктами настоящего
                Соглашения и безусловно принимает их.
            </div>
        </div>
    )  
    const ansquest = (
        <div className="divCat">
            <div className="title-styleAlg">Вопрос – ответ</div>
            <div className="container-2AQ">
                <div className="content-2AQ">
                    <div className="section1AQ">
                        <img className="imageAQ" src={vop1} />
                    </div>
                    <div className="section2AQ">
                        <p className="text-blockAQ">
                            <b className = "govno">Не можете определиться с выбором дизайна и расцветки?</b>
                            <br /><br />
                            Наши специалисты предоставят <b>несколько готовых проектов</b> <br/>для удобства выбора стиля и конфигурации изделия.
                            <br /><br />Также <b>мы поможем</b> с выбором материалов и цветовой гаммы,  с учётом <b>ваших пожеланий</b> и общего интерьерного решения помещения.
                        </p>
                    </div>
                </div>
                <div className="content-3AQ">
                    <div className="section3AQ">
                        <img className="imageAQ" src={vop2} />
                    </div>
                    <div className="section4AQ">
                        <p className="text-block1AQ">
                            <b className="govno">Откладываете вызов нашего специалиста для замера
                               <br/> и просчёта изделия до лучшей финансовой ситуации?</b>
                            <br /><br />
                            <b>Экономически выгоднее</b> для клиента заказывать замер до начала ремонта в помещении. Наш дизайнер абсолютно <b>бесплатно</b> поможет Вам с планировкой, проектом и техническими рекомендациями.
                            <br /><br />Мы будем рады быть Вам полезными даже в случае отказа от дальнейшего сотрудничества! С готовым проектом Вы сможете <b>быстрее</b><br />и <b>выгоднее</b> завершить ремонт!
                        </p>
                    </div>
                </div>
                
                <div className="content-4AQ">
                    <div className="section5AQ">
                        <img className="imageAQ" src={vop3} />
                    </div>
                    <div className="section6AQ">
                        <p className="text-block2AQ">
                            <b className="govno">Сомневаетесь в качестве продукции?</b>
                            <br /><br />
                            Мы предоставляем <b>широкий выбор</b> лицевых
                            и внутренних материалов для изготовления корпусной мебели. Заказчик вправе самостоятельно определять комплектацию заказа.
                            <br /><br />На <b>бесплатном замере</b> с помощью образцов, которые предоставит <br/>наш специалист, Вы сможете изучить цвета, фактуру, качество,<br/>эксплуатационные характеристики
                            и правила ухода за каждым материалом.
                        </p>
                    </div>
                </div>
            </div>   
            <div></div>
        </div>
    )
    const MainPage = (
        <div className='div'>
            {Head}
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
            {footer}
        </div>
    )
    const FeedbackPage = (
        <body>
            {Head}
            {GetFeedback}
            {footer}
        </body>
    )
    const EmployeePage = (
        <body>
            {Head}
            {employee}
            {footer}
        </body>
    )
    const CategoryPage = (
        <body>
            {Head}
            {Categs}
            {footer}
        </body>
    )
    const MaterialPage = (
        <body>
            {Head}
            {Material}
            {footer}
        </body>
    )
    const AlgorithmPage = (
        <body>
            {Head}
            {Algorithm}
            {footer}
        </body>
    )
    const AutorsProPage = (
        <body>
            {Head}
            {AutorProj}
            {footer}
        </body>
    )
    const PrivPolPage = (
        <body>
            {Head}
            {privpol}
            {footer}
        </body>
    )
    const OfferPage = (
        <body>
            {Head}
            {offer}
            {footer}
        </body>
    )
    const SiteMapPage = (
        <body>
            {Head}
            {sitemap}
            {footer}
        </body>
    )
    const AnsQstPage = (
        <body>
            {Head}
            {ansquest}
            {footer}
        </body>
    )
    const PolsSogPage = (
        <body>
            {Head}
            {polsog}
            {footer}
        </body>
    )
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet" />
            {showMainPage && MainPage}
            {showFeedbackPage && FeedbackPage}
            {showEmployeePage && EmployeePage}
            {showCategPage && CategoryPage}
            {showMaterialPage && MaterialPage}
            {showAlgorithmPage && AlgorithmPage}   
            {showAutorProjPage && AutorsProPage}
            {showSiteMap && SiteMapPage}
            {showPolPage && PrivPolPage}
            {showOfferPage && OfferPage}
            {showAnsQstPage && AnsQstPage}
            {showPolSogPage && PolsSogPage}
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
    async function sendEmploee() {
        const name = document.getElementById('empName').value;
        const phonumber = document.getElementById('empPhone').value;
        const mail = document.getElementById('empMail').value;
        const link = document.getElementById('empLink').value;
        const comment = document.getElementById('empCom').value;
        await fetch(`addemploee?question=${name, phonumber, mail, link, comment}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phonumber, mail, link, comment })
        });
    }
    async function sendFeedBack(){
        const name = document.getElementById('FBname').value;
        const phonumber = document.getElementById('FBphone').value;
        const feedback = document.getElementById('FB').value;
        await fetch(`addfeedback?question=${name, phonumber, feedback}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phonumber, feedback })
        });
        sFeedback();
    }
    async function Table() {
        try {
            const response = await fetch('table');
            const data = await response.json();
            console.log(data)
            setForecasts(data);
            
        } catch(error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }
    async function Materials() {
        try {
            const response = await fetch('materials');
            const data = await response.json();
            console.log(data)
            setmaters(data);
            
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }
    async function AvtProj() {
        try {
            const response = await fetch('autprojects');
            const data = await response.json();
            console.log(data)
            setavtprj(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }
    async function sFeedback() {
        try {
            const response = await fetch('feedback')
            const data = await response.json();
            console.log(data);
            const sdata = data.filter(item => item.show == true);
            setFB(sdata);
        } catch (error) {
            console.error('Ошибка при загрузке данны FB', error)
        }
    }

}

export default App;
