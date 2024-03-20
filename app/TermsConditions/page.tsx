"use client";
import React, {useEffect} from "react";
import Link from "next/link";
import {RightOutlined} from "@ant-design/icons";
import {Collapse} from "antd";
import GoogleSetup, {trackPageViewInGoogle} from "@/utilities/GoogleSetUp";

const TermsConditions = () => {
  const { Panel } = Collapse;
  function callback(key:any) {
    console.log(key);
  }
  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.NEXT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"Terms & Conditions"}
          description={"Please read our terms and conditions to understand your obligations and our obligations when you use the website. Learn more."}
        />
        <div className="container-fluid">
          <div
            className="row bread_crumb"
            style={{
              border: 0,
              backgroundColor: "transparent",
              position: "relative",
              zIndex: 99,
            }}
          >
            <div className="col-sm-12">
              <h1>Terms & Conditions</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                                <label>Terms & Conditions</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="info_section">
                            <h2>Terms & Conditions</h2>
                            <br/>
                            <strong>User Agreement</strong>
                            <p>
                                Terms of service: an agreement between you and My Merch to enter
                                and use this website and services
                            </p>
                            <strong>Welcome to the My Merch website and services.</strong>
                            <p>
                                We hope you enjoy your use of our facilities. Please appreciate
                                and understand that this is a legal world and that you, by not
                                immediately leaving this website now or immediately after
                                reading our terms of service are accepting our services under
                                the terms of this agreement. It is your obligation to keep your
                                self informed of any changes that may occur between visits, as
                                using our services each time is under the condition that you
                                accept all our terms and conditions. We may change our terms and
                                conditions from time to time without expressly informing you.
                            </p>
                            <Collapse defaultActiveKey={["1"]} onChange={callback}>
                                <Panel header="1. My Merch Services" key="1">
                                    <ul>
                                        <li>
                                            Create, design, customize products that are listed for
                                            sale.
                                        </li>
                                        <li>Buy products that are listed for sale.</li>
                                        <li>Save and share designs that your may have created.</li>
                                        <li>Use our fun picture and design tools.</li>
                                        <li>
                                            Save created images and designs into public and personal
                                            galleries.
                                        </li>
                                        <li>
                                            Post your created images to social networks or blogs that
                                            you have the legal right to do so.
                                        </li>
                                        <li>
                                            Registering to subscribe to special offers and use of
                                            galleries.
                                        </li>
                                    </ul>
                                </Panel>
                                <Panel header="2. Using our My Merch Services and Website" key="2">
                                    <p>
                                        In consideration of the promises and obligations given and
                                        assumed herein, and intending to be legally bound, these
                                        Terms of Use provide as follows.
                                    </p>
                                    <strong>ELIGIBILITY CHILDREN UNDER 18 : </strong>
                                    <p>
                                        My Merch will only knowingly provide products or services to
                                        persons who can lawfully enter into and form contracts under
                                        applicable law.
                                    </p>
                                    <p>
                                        If you are under the age of 18, but at least 13 years of
                                        age, you may order products or services only under the
                                        supervision of a parent or legal guardian who agrees to be
                                        bound by these Terms of Use. Children under the age of 13
                                        may view the Website but MAY NOT ORDER PRODUCTS OR SERVICES.
                                    </p>
                                    <strong>Definitions and Interpretation</strong>
                                    <p>
                                        In these Terms of Use, unless the context indicates a
                                        contrary intention:
                                    </p>
                                    <ul>
                                        <li>
                                            Intellectual Property Rights means all industrial,
                                            commercial and intellectual property rights (including
                                            equivalent, neighbouring or proximate rights anywhere in
                                            the world that currently exist or are recognised in the
                                            future).
                                        </li>
                                        <li>
                                            A person means any form of legal entity as well as any
                                            quasi-legal entity.
                                        </li>
                                        <li>
                                            A User means any person using the website and/or services
                                            provided by My Merch
                                        </li>
                                        <li>
                                            A reference to any document, material, information or data
                                            includes that document, material, information and data
                                            howsoever stored, recorded or embodied, including in any
                                            electronic or digital media or otherwise.
                                        </li>
                                        <li>
                                            The word includes in any form is not a word of limitation.
                                        </li>
                                    </ul>
                                </Panel>
                                <Panel header="3. User's Obligations" key="3">
                                    <strong>3.1 Responsibilities</strong>
                                    <br/> Users are and shall be wholly and exclusively
                                    responsible, at their own cost, for:
                                    <ol>
                                        <li>
                                            all telecommunications lines, modems, communication
                                            controllers, routers, multiplexers, terminals and all
                                            other equipment, hardware and software necessary to access
                                            and use the Website and services;
                                        </li>
                                        <li>
                                            the use that it makes of the website , including any
                                            article, material, literary or artistic work, design or
                                            other matter that they author, invent, create, develop or
                                            produce;
                                        </li>
                                        <li>
                                            complying with all laws, regulations and rules in the uses
                                            country or jurisdiction;
                                        </li>
                                        <li>
                                            complying with any recommendations or guidelines issued by
                                            My Merch with respect to the use of the Website and/or
                                            services and
                                        </li>
                                        <li>
                                            ensuring that all electronic or other media it uses in
                                            connection or in conjunction with the Website and the
                                            services provided complies with these Terms of Use and all
                                            applicable laws, regulations and rules.
                                        </li>
                                    </ol>
                                    <p>
                                        <strong>3.2 Restrictions on Users</strong>
                                        <br/> Users shall not and has no right to either:
                                    </p>
                                    <ol>
                                        <li>
                                            reproduce, publish, distribute, sub-license and/or resell
                                            either the Website and/or service to any person; or
                                        </li>
                                        <li>
                                            use either the Website to supply any service to any
                                            person; or
                                        </li>
                                        <li>
                                            modify, adapt, disassemble, recompile and/or reverse
                                            engineer either the Website or service;
                                        </li>
                                        <li>
                                            access or use either the Website and/or service to create,
                                            author, design, manufacture, market, publish, transmit,
                                            broadcast, distribute or sell any article, product,
                                            material or other matter that either:
                                        </li>
                                        <ol>
                                            <li>
                                                infringes the rights of any person, including, without
                                                limitation, Intellectual Property Rights, trade secrets,
                                                rights of privacy and publicity.
                                            </li>
                                            <li>is libellous, defamatory or slanderous,</li>
                                            <li>
                                                condones, promotes, contains or links to adware, cracks,
                                                hacks or similar utilities or programs,
                                            </li>
                                            <li>contains explicit sexual content,</li>
                                            <li>
                                                does or may denigrate or offend any ethnic, racial,
                                                gender, religious or other group, through use of
                                                language, images, stereotypical depiction or otherwise,
                                            </li>
                                            <li>
                                                is designed to or does harass, threaten, defame or abuse
                                                others,
                                            </li>
                                            <li>exploits images or the likeness of minors,</li>
                                            <li>
                                                encourages the use of drugs or the under-age use of
                                                alcohol or cigarettes, or
                                            </li>
                                            <li>is generally offensive or in bad taste;</li>
                                        </ol>
                                        <li>
                                            use  `&quot;`Spam `&quot;`,  `&quot;`blast-faxes `&quot;` or recorded telephone messages
                                            to market or sell any products or services,
                                        </li>
                                        <li>
                                            use, transfer or implant a virus, routine or any computer
                                            program or technology that disrupts, disables, interferes
                                            with or otherwise has a detrimental affect on the Website
                                            and/or the PIKIWARE&Acirc;&reg; Platform,
                                        </li>
                                        <li>
                                            take any action that imposes any unreasonable or
                                            disproportionately large load on the Website or the
                                            Service,
                                        </li>
                                        <li>
                                            use a robot, spider or other device or process to monitor
                                            the activity on or copy pages from the Website or the
                                            Service,
                                        </li>
                                        <li>
                                            collect electronic mail addresses or other information
                                            from our Website,
                                        </li>
                                        <li>impersonate another person or entity,</li>
                                        <li>
                                            engage in any activity that interferes with any persons
                                            ability to use or access the Website and/or services, or
                                        </li>
                                        <li>
                                            assist, procure or aid any person to engage in any
                                            activity prohibited by these Terms of Use; or
                                        </li>
                                        <li>
                                            frame or link or otherwise use or display the Website in
                                            such a manner so that it appears to be part of its own or
                                            someone else`&apos;`s website, without specific agreement.
                                        </li>
                                    </ol>
                                    <p>
                                        USER ACKNOWLEDGES AND AGREES THAT My Merch MAY IN ITS SOLE
                                        AND UNFETTERED DISCRETION, UNILATERALLY AND WITHOUT NOTICE,
                                        TERMINATE THESE TERMS OF USE, DISABLE AND DENY ACCESS TO THE
                                        USER TO THE WEBSITE AND THE SERVICES, AND TAKE LEGAL ACTION
                                        AGAINST ANY USER WHO ENGAGES IN ANY ACTIVITY OR CONDUCT THAT
                                        IS PROHIBITED BY THESE TERMS OF USE AND/OR BY ANY RELEVANT
                                        LAW, REGULATION OR RULE.
                                    </p>
                                </Panel>
                                <Panel header="4. My Merch Obligations" key="4">
                                    <strong>
                                        4.1 Access to and use of the Website and Services&nbsp;
                                    </strong>
                                    Subject to user complying with and discharging each of its
                                    obligations under these Terms of Use, My Merch shall allow
                                    user to access and use the Website and the services .<br/>
                                    <br/> <strong>4.2 Privacy:&nbsp;</strong>My Merch may collect
                                    personal data concerning the user in the course of and
                                    incidental to users use of the Website and services. My Merch
                                    shall comply with, and user hereby consents irrevocably and
                                    unconditionally to My Merch collection, use and disclosure of
                                    such data in accordance with, its Privacy Policy (the terms of
                                    which may be accessed through the link on the Website).
                                    <br/> <br/> <strong>4.3 Training</strong>
                                    <br/> User acknowledges that My Merch has no obligation to
                                    user to provide any training or other support in relation to
                                    the use or operation of the Website and/or services.
                                    <br/> <br/>
                                    <strong>4.4 Modification of the Website.</strong>
                                    <br/> My Merch reserves the right to modify the organization,
                                    structure, content or `&apos;`look and feel`&apos;` of the Website and/or
                                    the services, and may change, suspend, or discontinue any
                                    aspect of the Website and/or the service at any time without
                                    notice or any liability to user or any person. My Merch shall
                                    have complete discretion over the features, functions and
                                    other terms and conditions on which the Website and the
                                    service is made available.
                                </Panel>
                                <Panel header="5. Intellectual Property Rights" key="5">
                                    <strong>5.1 Reservation of title</strong>
                                    <br/> user acknowledges that these Terms of Use do not convey
                                    and that it derives no right, title or interest in or to any
                                    Intellectual Property Rights that vest or subsist in or relate
                                    to the Website and/or the services provided other than
                                    pursuant to the express authorisation set out in clause 4.1.
                                    My Merch grants user a limited revocable licence to access and
                                    use the Website and the service for its intended purposes,
                                    subject to users compliance with these Terms of Use. This
                                    licence does not include the right to collect or use
                                    information contained on the Website for purposes prohibited
                                    by My Merch; to compete with Piki Print; to create derivative
                                    works based on the layout or design, look-and-feel, or
                                    structure of the Website; or download or copy the Website
                                    (other than page caching). If user uses the Website in a
                                    manner that exceeds the scope of this licence or if it
                                    breaches these Terms of Use, My Merch may revoke the licence
                                    and deny access to and use of the Website.
                                    <br/> <br/> <strong>5.2 Prohibition on infringement</strong>
                                    <br/> User acknowledges and agrees that My Merch does not
                                    permit, authorise or condone and hereby expressly prohibits
                                    user from accessing or using the Website and/or the services
                                    in a manner that infringes, or is likely to infringe, the
                                    Intellectual Property Rights, or any other rights or
                                    privileges, of any person anywhere in the world.
                                    <br/> <br/> <strong>5.3 Derivative material</strong>
                                    <br/> Subject to clause 5.2, user shall own any Intellectual
                                    Property Rights in any original material that it authors,
                                    designs or creates using the functionality provided by the
                                    Website. If the user chooses to add any item to a public
                                    gallery, In consideration of the authorisation granted under
                                    clause 4.1, User hereby grants to My Merch an irrevocable,
                                    perpetual, non-exclusive, world-wide licence to do all acts
                                    and things (including to authorise other persons to do all
                                    acts and things) comprised within the said Intellectual
                                    Property Rights.
                                </Panel>
                                <Panel header="6. Registration" key="6">
                                    <p>
                                        User Account, Password, and Security You will receive a
                                        password and account designation upon completing the Site`&apos;`s
                                        registration process. You are responsible for maintaining
                                        the confidentiality of the password and account, and are
                                        fully responsible for all activities that occur under your
                                        password or account. You agree to (a) immediately notify My
                                        Merch of any unauthorized use of your password or account or
                                        any other breach of security, and (b) ensure that you exit
                                        from your account at the end of each session. My Merch
                                        cannot and will not be liable for any loss or damage arising
                                        from your failure to comply with this Section 6
                                    </p>
                                </Panel>
                                <Panel header="7. Warranties" key="7">
                                    <p>
                                        <strong>7.1 Users warranties</strong>
                                        <br/> User represents and warrants to My Merch that, in its
                                        use of the Website and the Services provided, it:
                                    </p>
                                    <ol>
                                        <li>
                                            will not infringe the Intellectual Property Rights, trade
                                            secrets, rights of privacy, rights of publicity or other
                                            legal right of any person, and
                                        </li>
                                        <li>
                                            will comply with all applicable laws, rules, and
                                            regulations.
                                        </li>
                                        <li>
                                            User further represents and warrants to My Merch that:
                                        </li>
                                        <li>
                                            there are no claims, demands or any form of litigation
                                            pending, or to the best of its knowledge, threatened with
                                            respect to any content used or proposed to be used by
                                            user;
                                        </li>
                                        <li>
                                            My Merch will not be required to make any payments or
                                            compensation to any person in connection with its use of
                                            such content; and
                                        </li>
                                        <li>
                                            such content does not contain viruses or any other
                                            programs or technology which disrupts or damages the
                                            Website and/or the Services provided.
                                        </li>
                                    </ol>
                                    <p>
                                        <strong>7.2 My Merch warranties</strong>
                                        <br/> My Merch represents and warrants that it has the
                                        right to grant access to and license the use of the Website
                                        and services to user subject to and in accordance with these
                                        Terms of Use.
                                        <br/> <br/> <strong>7.3 Caveats</strong>
                                    </p>
                                    <ul>
                                        <li>
                                            My Merch provides the Website and Services on an &quot;as is&quot;
                                            and &quot;as available&quot; basis. Nothing in these Terms of Use
                                            shall or may be construed as a representation or warranty
                                            by My Merch that the functionality or operation of the
                                            Website and/or the services will:
                                        </li>
                                        <ol>
                                            <li>
                                                be uninterrupted or free of errors and inaccuracies;
                                            </li>
                                            <li>meet users requirements; or</li>
                                            <li>
                                                operate in the configuration or with the hardware or
                                                software used by user.
                                            </li>
                                        </ol>
                                        <li>
                                            User acknowledges and agrees that the Website and the
                                            service (as with technology generally), may have errors
                                            (or bugs) and may encounter unexpected problems.
                                            Accordingly, user may experience downtime and errors in
                                            the use or operation of the Website and/or services
                                            provided.
                                        </li>
                                        <li>
                                            My Merch does not and cannot control the flow of data and
                                            information through the internet, and such flow depends on
                                            the performance of persons and entities whose actions or
                                            inactions may produce situations in which connections to
                                            the internet (or portions thereof) are impaired or
                                            disrupted and for which My Merch is not liable.
                                        </li>
                                        <li>
                                            My Merch does not warrant that any data, information or
                                            other content provided on the Website, whether concerning
                                            any goods or services or any other subject, is complete or
                                            accurate.
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>7.4 Exclusion of implied warranties</strong>
                                        <br/> SUBJECT ONLY TO CLAUSE 8.1, ALL CONDITIONS,
                                        WARRANTIES, REPRESENTATIONS, INDEMNITIES AND GUARANTEES WITH
                                        RESPECT TO THE WEBSITE AND/OR ANY OTHER GOODS OR SERVICES
                                        THAT MAY BE PROVIDED BY My Merch, THAT WOULD OTHERWISE BE
                                        IMPLIED BY STATUTE, LAW, EQUITY, TRADE CUSTOM, PRIOR
                                        DEALINGS BETWEEN THE PARTIES OR OTHERWISE (INCLUDING ANY
                                        IMPLIED WARRANTY OF MERCHANTABILITY, SUITABILITY, FITNESS
                                        FOR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT) ARE HEREBY
                                        EXPRESSLY EXCLUDED.
                                    </p>
                                    <strong>7.5 No representation or reliance</strong>
                                    <br/> (a) User acknowledges that neither My Merch nor any
                                    person acting on Piki Prints behalf has made any
                                    representation or other inducement to user to enter into these
                                    Terms of Use, except for representations or inducements
                                    expressly set out in these Terms of Use.
                                    <br/> (b) User acknowledges and confirms that it does not
                                    enter into these Terms of Use in reliance on any
                                    representation or other inducement by or on behalf of My
                                    Merch, except for representations or inducements expressly set
                                    out in these Terms of Use.
                                </Panel>
                                <Panel header="8. Exclusion and Limitation of Liability" key="8">
                                    <strong>8.1 Subject to law</strong>
                                    <br/> Nothing contained in these Terms of Use excludes,
                                    restricts, limits or modifies any:
                                    <br/> (a) implied condition, warranty or other term of these
                                    Terms of Use where pursuant to applicable law to do so is
                                    unlawful or void; or
                                    <br/> (b) liability in respect of a breach of these Terms of
                                    Use where pursuant to applicable law to do so is unlawful or
                                    void; or
                                    <br/> (c) liability for fraud or deceit; or
                                    <br/> (d) liability for death or personal injury caused by
                                    the negligence of either party.
                                    <br/> <br/> <strong>8.2 Exclusion of liability</strong>
                                    <br/> Subject only to Clause 8.1, in no event shall My Merch
                                    be liable to user or to any person under or in connection with
                                    these Terms of Use or in respect of the use of (or failure or
                                    performance of) the Website and/or the services provided for:
                                    <br/> (a) malfunctions, failures, defects, acts or omissions
                                    or any other default or liability caused directly or
                                    indirectly by:
                                    <ol>
                                        <li>any third party;</li>
                                        <li>
                                            actions of user that were not expressly authorised by My
                                            Merch
                                        </li>
                                        <li>
                                            accident, misuse or abuse by anyone other than My Merch
                                        </li>
                                        <li>
                                            alteration or modification of the Website and/or the
                                            service, or any component or part of the Website and/or
                                            the service provided, by anyone other than My Merch
                                        </li>
                                        <li>
                                            products (including any hardware or software) or services
                                            not licensed or supplied by My Merch
                                        </li>
                                        <li>power surge or failure,</li>
                                        <li>
                                            events of force majeure or events outside My Merch actual
                                            control; or
                                        </li>
                                        <li>
                                            any other condition not arising under normal operating
                                            conditions
                                        </li>
                                    </ol>
                                    <p>
                                        <br/>
                                    </p>
                                    <p>
                                        (b) any loss, cost, damage or expense of any nature arising
                                        or caused directly or indirectly by any breach of users
                                        obligations or responsibilities set out in these Terms of
                                        Use;
                                        <br/> (c) any loss of profit, business interruption, loss
                                        of or damage to goodwill, and/or any expectation benefit;
                                        <br/> (d) Subscribers liability to any person; or
                                        <br/> (e) incidental, indirect, consequential, special,
                                        exemplary or punitive damages of any nature, whether such
                                        liability is asserted on the basis of common or civil law or
                                        in equity, including pursuant to any statute, contract, tort
                                        (including negligence or strict liability) or otherwise and
                                        notwithstanding that My Merch has been advised of the
                                        possibility of any particular loss or damage.
                                        <br/> <br/> <strong>8.3 Links</strong>
                                        <br/> My Merch may, in its sole and unfettered discretion,
                                        and without users consent, place links on the Website to
                                        other websites that are owned or operated by other persons.
                                        User acknowledges and agrees that My Merch is not
                                        responsible for the operation of or content located on any
                                        such website, and My Merch cannot and does not warrant that
                                        the content of such websites is accurate, complete, legal
                                        and/or inoffensive. By choosing to link to these other
                                        websites, user acknowledges and agrees that it may not make
                                        any claim against My Merch for any damages or losses of any
                                        kind arising from the other website and/or the link.
                                        <br/> <br/> <strong>8.4 Limitation of liability</strong>
                                        <br/> Subject to Clause 8.1, and except to the extent
                                        specifically excluded under Clause 8.2 or elsewhere in these
                                        Terms of Use, My Merch sole liability to Subscriber for any
                                        and all breaches of any term or terms of these Terms of Use,
                                        whether express or implied, shall be limited to the
                                        substitution or replacement of any product or service that
                                        has been ordered and paid for by Subscriber using the
                                        Website.
                                        <br/> <br/> <strong>8.5 Indemnity</strong>&nbsp;User shall
                                        indemnify and hereby releases unconditionally My Merch,
                                        without set off or adjustment, against and from any
                                        liability, loss, cost, expense or damage, including all
                                        legal fees, arising from or relating to: (a) its use of the
                                        Website and/or services and/or the media or content posted
                                        or uploaded by it, including any alleged or actual violation
                                        of any law directly or indirectly arising from such use; (b)
                                        any breach or alleged breach by it of these Terms of Use;
                                        (c) the misuse or misappropriation of the said media or
                                        content; and (d) any infringement or alleged infringement by
                                        user of any persons Intellectual Property Rights, rights of
                                        privacy or publication, or otherwise anywhere in the world.
                                    </p>
                                </Panel>
                                <Panel header="9. Termination" key="9">
                                    <strong>9.1 Termination</strong>
                                    <br/> (a) At any time and with or without cause, My Merch may
                                    immediately terminate either these Terms of Use or any or all
                                    rights and privileges granted to user hereunder, including
                                    suspending users access to and/or use of the Website and/or
                                    the Services provided by My Merch. In no event shall any such
                                    termination or suspension by My Merch relieve user of any
                                    obligation that has accrued under these Terms of Use prior to
                                    the date of such termination or suspension.
                                    <br/> (b) user may terminate these Terms of Use at any time
                                    by ceasing to enter the website and using the services
                                    <br/> <br/> <strong>9.2 Effect of termination</strong>
                                    <br/> (a) On any expiry or termination of these Terms of Use,
                                    My Merch may delete any websites, web pages, files, graphics,
                                    media or other content or material relating to users use of
                                    the Website and/or the Services provided and My Merch shall
                                    have no liability to user or any person for doing so.
                                    <br/> (b) The expiry or termination of these Terms of Use
                                    shall not prejudice or affect any cause of action, right,
                                    remedy or defence which shall have accrued or shall thereafter
                                    accrue to either party.
                                </Panel>
                                <Panel header="10. General" key="10">
                                    <strong>10.1 Severability</strong>
                                    <br/> If a clause or any part of any clause of these Terms of
                                    Use or a right or remedy of a party under these Terms of Use,
                                    is found to be void, invalid or unenforceable by any court or
                                    tribunal having jurisdiction in respect of these Terms of Use,
                                    then:
                                    <br/> (a) it shall be read down or severed in that
                                    jurisdiction only to the extent that it is void, invalid or
                                    unenforceable; and
                                    <br/> (b) it does not effect the validity or enforceability
                                    of that term or clause in another jurisdiction or the
                                    remaining terms or clauses in any jurisdiction.
                                    <br/> <br/> <strong>10.2 Variation</strong>
                                    <br/> My Merch may amend unilaterally these Terms of Use in
                                    its sole and unfettered discretion at any time, and user
                                    hereby agrees to abide by and be fully bound by such amended
                                    terms. The amended terms shall be effective automatically and
                                    immediately once they are posted on the Website, and user`&apos;s
                                    continued access and use of the Website and the Services on or
                                    after such effective time constitutes the user`&apos;s unequivocal
                                    and unconditional acceptance of the amended terms. These Terms
                                    of Use may not be otherwise amended. If user does not agree to
                                    any amendments to these Terms of Use or to any of the current
                                    terms, its only right and remedy is to cease using the Website
                                    and the My Merch services.
                                    <br/> <br/> <strong>10.3 Waiver</strong>
                                    <br/> A waiver, consent, election or acquiescence given by a
                                    party under these Terms of Use is only effective and binding
                                    on that party if it is given or confirmed in writing by that
                                    party.
                                    <br/> <br/> <strong>10.4 Assignment</strong>
                                    <br/> (a) My Merch may at any time transfer, assign, novate
                                    or otherwise dispose of any or all of its rights or
                                    obligations under these Terms of Use on giving user no less
                                    than five (5) days notice in writing.
                                    <br/> <br/>
                                    <strong>10.5 Governing Law and Jurisdiction</strong>
                                    <br/> (a) These Terms of Use shall be governed by and
                                    construed in accordance with the law in force for the time
                                    being in Delaware, United States of America (without regard to
                                    its conflict of law rules).
                                    <br/> (b) Each party irrevocably submits to the exclusive
                                    jurisdiction of the courts of Delaware, and the courts
                                    competent to determine appeals from those courts, with respect
                                    to any proceedings that may be brought at any time relating to
                                    these.
                                </Panel>
                                <Panel header="11. Promotions" key="11">
                                    <strong>Water Aid Partnership:</strong>
                                    <ul>
                                        <li>
                                            The Water Aid Partnership is valid from 12th June 2023 to 11th June 2024.
                                        </li>
                                        <li>
                                            Only water bottles over $15 unit price will participate in the campaign.
                                        </li>
                                        <li>
                                            $1 dollar per water bottle will be donated to Water Aid during this period.
                                        </li>
                                        <li>
                                            MyMerch reserves the right to vary the terms and conditions of the offer at
                                            the company`&apos;s own discretion.
                                        </li>
                                    </ul>
                                </Panel>
                                <Panel header="12. Newsletter" key="12">
                                    <p>We may subscribe you to our newsletter to receive emails from us. The aim of our
                                        newsletter service is to keep our customers and visitors updated about trends,
                                        news, and inspiration. A subscription to our newsletter service is not mandatory
                                        and you can unsubscribe at any time.</p>
                                    <strong>12.1 Frequency</strong>
                                    <br/> The frequency of the newsletter issues will be at most 3 per month.
                                    <br/> <br/> <strong>12.2 Limited Liability</strong>
                                    <br/> We reserve the sole right to either modify or discontinue the newsletter, at any time with or without notice to you. We will not be liable to you or any third party should we exercise such right. Any new features that augment or enhance the then-current services on this site shall also be subject to these Terms of Use.
                                    <br/> We reserve the sole right to unsubscribe users/visitors from our newsletter service, without notice. We will do so with any subscriber we deem registered with fake data.
                                    <br/> <br/> <strong>12.3 Privacy policy</strong>
                                    <br/>We will not communicate/spread/publish or otherwise give away your contact details. You’ll be able to change your subscription settings or delete it altogether. 
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TermsConditions;
