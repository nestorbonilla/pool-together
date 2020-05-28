import React from 'react';
import { Container, Button } from "reactstrap";
import { Tabs } from 'antd'
import 'antd/dist/antd.css'
import SectionTitle from "../common/sectionTitle";

const { TabPane } = Tabs;

function Steps() {

    return (
        <React.Fragment>
            <section className="section bg-light" id="steps">
                <Container>
                    <SectionTitle title="How to participate" description="Imagine that instead of the traditional lottery system where in order to participate you need to buy a non-refundable ticket at a fixed price, you could deposit an amount of money at a secure smart contract that earns some interests, and on every iteration of the lottery, only this amount is played. With this process, everyone is happy: if you won, you’ll receive your deposit plus the interest, but if you lose, you receive your total funds. Nothing to lose, much to earn. Let’s pool together."/>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Create a Wallet" key="1">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <p className="mb-5 step-text">
                                            One of the easiest ways to access PoolTogether is to create a wallet with Argent wallet.
                                            <br/>Please, download the App and create your first Wallet.
                                        </p>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg d-block mx-auto mb-4">
                                    <img src="/assets/images/argent-logo.gif" className="avatar-img rounded-circle image-centered" alt="Argent logo" />
                                </div>
                                <p className="text-center small step-text">Download the app</p>
                                <div className="row no-gutters align-items-center justify-content-center mx-n3 mb-5">
                                    <div className="col-auto col-lg-auto mb-lg-0">
                                    <a href="https://apps.apple.com/us/app/argent/id1358741926" rel="noopener noreferrer" target="_blank">
                                        <img className="lift d-none d-lg-block" src="assets/images/app-store.svg" alt="" height="48" />
                                        <img className="lift d-block d-lg-none mx-auto" src="assets/images/app-store.svg" alt="" height="40" />
                                    </a>
                                    </div>
                                    <div className="col-auto col-lg-auto pl-2 pl-lg-3">
                                    <a href="https://play.google.com/store/apps/details?id=im.argent.contractwalletclient" rel="noopener noreferrer" target="_blank">
                                        <img className="lift d-none d-lg-block" src="assets/images/play-store.svg" alt="" height="48" />
                                        <img className="lift d-block d-lg-none mx-auto" src="assets/images/play-store.svg" alt="" height="40" />
                                    </a>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Buy DAI" key="2">
                                {/* Attribute to iframe code
                                https://github.com/nicemarcela/pooltogether101 */}
                                <iframe className="w-100 vh-100 rounded mb-3 mb-lg-3 border-0" id="moonpay" allow="accelerometer; autoplay; camera; gyroscope; payment" title="Send Ether to this address" src="https://buy.moonpay.io?apiKey=pk_live_GaguyM1nApoXIy3KGTr9slDBelaYRzrh&amp;hideLogo=true&amp;colorCode=%235029AB&amp;walletAddresses=%7B&quot;eth&quot;%3A&quot;0x3e5078EB44ddb57B9785359268C8Eab208E3b666&quot;%7D"><p>Your browser does not support iframes.</p></iframe>
                                <h6 className="text-uppercase mb-3 text-center step-text">
                                    Or
                                </h6>
                                <div className="row justify-content-center mb-5 mb-lg-0 w-75 mx-auto">
                                    <button onClick={()=> window.location = 'https://www.argent.xyz/'} className="btn mb-3 btn-block btn-yellow" id='buy'>Buy via <img src="assets/images/argent-logo.svg" alt="" height="24" /></button>
                                </div>
                            </TabPane>
                            <TabPane tab="Let's Play" key="3">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <p className="mb-5 step-text">
                                            Now that you have your wallet and some DAI, let's Pool Together!
                                        </p>
                                    </div>
                                </div>
                                <Button type="button" onClick={()=> window.location = 'https://app.pooltogether.com/'} className="btn-custom navbar-btn btn-rounded waves-effect waves-light step-button">Launch App</Button>
                            </TabPane>
                        </Tabs>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Steps;