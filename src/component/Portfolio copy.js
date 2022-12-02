import React, { useRef, useState } from 'react';

const Portfolio = () => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);


    return (
        <section className='Portfolio'>
            <ul>
                <li className='left'>
                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className='inner'>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>

                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
                <li className='right'>

                    {/* <strong><a href="010-939-4845">010-939-4845</a></strong> */}
                    <h2 className=''>
                        국민과 소통하는 <br />따뜻하고 믿음직한 경찰로<br />국민과 함께 하겠습니다.
                    </h2>


                </li>
            </ul>
        </section >
    )
}



export default Portfolio