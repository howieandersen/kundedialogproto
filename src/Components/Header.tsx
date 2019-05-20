import * as React from 'react';
import '../App.css';
import '../style.css'

class Header extends React.Component<any, any>{

  public render() {   
    return (
        <div className="App">
            <header className="o-globalHeader">
                <div className="o-globalHeader__mobile">
                    <div className="container">
                        <a href="#searchForm" className="o-search__toggle" data-behavior="toggle"></a>
                        <a href="javascript:;" className="a-logo"></a>
                        <a id="hamburger" href="#o-navMobile" data-behavior="toggle"></a>
                    </div>
                </div>

                <div id="navBar" className="o-globalHeader__sticky o-globalHeader__desktop" data-behavior="sticky">
                    <div className="o-globalHeader__inner">
                        <div className="container">
                            <div className="table">
                                <nav className="nav navPrimary">
                                    <ul>
                                        <li className="a-logo small"><a href="javascript:;"></a></li>
                                        <li><a href="#research-nav" data-behavior="toggle">Om innovasjonnorge</a></li>
                                        <li><a href="#experts-nav" data-behavior="toggle">Våre tjenester</a></li>
                                        <li><a href="#fokusomrader" data-behavior="toggle">Fokusområder</a></li>
                                    </ul>
                                </nav>
                                <div className="nav o-search">
                                    <ul>
                                        <li><a href="javascript:;">EN</a></li>
                                        <li><a href="javascript:;">Logg ut</a></li>
                                        <li><a href="#searchForm" className="o-search__toggle" data-behavior="toggle"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="searchForm" className="o-searchForm break-out">
                                <div className="container">
                                    <form>
                                        <input type="search" placeholder="Search" value="" name="s" className="a-input" />
                                        <input type="submit" value="" className="o-searchForm__submit" />
                                    </form>
                                </div>
                            </div>

                            <div id="research-nav" className="navPrimary__topics break-out">
                                <div className="container">
                                    <nav>
                                        <ul>
                                            <li className="a-navTitle">om</li>
                                            <li><a href="javascript:;">Om Innovasjon Norge</a></li>
                                            <li><a href="javascript:;">Våre kontorer</a></li>
                                            <li><a href="javascript:;">Sosiale medier</a></li>
                                            <li><a href="javascript:;">Presserom</a></li>
                                            <li><a href="javascript:;">Jobb i Innovasjon Norge</a></li>
                                            <li><a href="javascript:;">Etikk og etterlevelse i Innovasjon Norge</a></li>
                                        </ul>
                                        <ul>
                                            <li className="a-navTitle">Second category</li>
                                            <li><a href="javascript:;">Page #1</a></li>
                                            <li><a href="javascript:;">Page #2</a></li>
                                            <li><a href="javascript:;">Page #3</a></li>
                                            <li><a href="javascript:;">Page #4</a></li>
                                            <li><a href="javascript:;">Page #5</a></li>
                                        </ul>
                                        <ul>
                                            <li className="a-navTitle">Third category</li>
                                            <li><a href="javascript:;">Page #1</a></li>
                                            <li><a href="javascript:;">Page #2</a></li>
                                            <li><a href="javascript:;">Page #3</a></li>
                                            <li><a href="javascript:;">Page #4</a></li>
                                            <li><a href="javascript:;">Page #5</a></li>
                                            <li><a href="javascript:;">Page #6</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div id="experts-nav" className="navPrimary__topics break-out">
                                <div className="container">
                                    <nav>
                                        <ul>
                                            <li><a href="javascript:;">Gründer</a></li>
                                            <li><a href="javascript:;">Sats internasjonalt</a></li>
                                            <li><a href="javascript:;">Profilering</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="javascript:;">Bygg bedrift</a></li>
                                            <li><a href="javascript:;">Finansiering</a></li>
                                            <li><a href="javascript:;">Arrangementer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="javascript:;">Klynger og bedriftsnettverk</a></li>
                                            <li><a href="javascript:;">Rådgivning</a></li>
                                            <li><a href="javascript:;">Påmelding til nyhetsbrev</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>


                            <div id="fokusomrader" className="navPrimary__topics break-out">
                                <div className="container">
                                    <nav>
                                        <ul>
                                            <li><a href="javascript:;">Reiseliv - Visit Norway</a></li>
                                            <li><a href="javascript:;">Kulturell og kreativ næring</a></li>
                                            <li><a href="javascript:;">Marin og sjømat</a></li>
                                            <li><a href="javascript:;">Landbruk</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="javascript:;">Bærekraft gir konkurransekraft</a></li>
                                            <li><a href="javascript:;">Maritim</a></li>
                                            <li><a href="javascript:;">Olje og gass</a></li>
                                            <li><a href="javascript:;">Helsesatsinga</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="javascript:;">Smarte samfunn og byer</a></li>
                                            <li><a href="javascript:;">Ren energi</a></li>
                                            <li><a href="javascript:;">IKT</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav id="o-navMobile" className="o-navMobile">
                <div className="container o-navMobile__inner">
                    <ul>
                        <li>
                            <a href="#navMobile-topics" className="o-navMobile__menuItem" data-behavior="toggle">Om innovasjonnorge</a>
                            <div id="navMobile-topics" className="o-navMobile__group__outer">
                                <div className="o-navMobile__group__inner">
                                    <ul>
                                        <li className="a-navTitle">om</li>
                                        <li><a href="javascript:;">Om Innovasjon Norge</a></li>
                                        <li><a href="javascript:;">Våre kontorer</a></li>
                                        <li><a href="javascript:;">Sosiale medier</a></li>
                                        <li><a href="javascript:;">Presserom</a></li>
                                        <li><a href="javascript:;">Jobb i Innovasjon Norge</a></li>
                                        <li><a href="javascript:;">Etikk og etterlevelse i Innovasjon Norge</a></li>
                                    </ul>
                                    <ul>
                                        <li className="a-navTitle">Second Category</li>
                                        <li><a href="javascript:;">Om Innovasjon Norge</a></li>
                                        <li><a href="javascript:;">Våre kontorer</a></li>
                                        <li><a href="javascript:;">Sosiale medier</a></li>
                                        <li><a href="javascript:;">Presserom</a></li>
                                        <li><a href="javascript:;">Jobb i Innovasjon Norge</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="o-navMobile__menuItem"><a href="javascript:;">Våre tjenester</a></li>
                        <li className="o-navMobile__menuItem"><a href="javascript:;">Fokusområder</a></li>

                        <li className="o-navMobile__menuItem uppercase"><a href="javascript:;">Logg inn</a></li>
                        <li className="o-navMobile__menuItem uppercase"><a href="javascript:;">English</a></li>

                        <div className="o-searchForm">
                            <form>
                                <input type="search" placeholder="Search" value="" name="s" className="a-input" />
                                <input type="submit" value="" className="o-searchForm__submit" />
                            </form>
                        </div>
                    </ul>
                </div>
                <a href="#o-navMobile" className="o-navMobile__close"></a>
            </nav>
        </div>
    );
  }
}

export default Header;