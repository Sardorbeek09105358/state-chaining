import React, { useState } from 'react'
import Cleave from 'cleave.js/react'

const YourFormComponent = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: "",
        subscription: '',
        firstName: '',
        lastName: '',
        middleName: '',
        birthdate: '',
        email: '',
        gender: '',
        isLoaderThan18: false,
        cardNumber: '',
        consentToProccesng: false,
        cookieArgiment: false
    })
    const [currentStep, setCurrentStep] = useState(1)
    const [creditCardType, setCreditCardType] = useState(null)
    const handeNextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1)
    }

    const onCreditCardChange = (e) => {
        console.log(e);
    }

    const hanleCreditCardTypedChanged = (type) => {
        setCreditCardType(type)
    }
    return (
        <div className='container mx-auto my-5 rounded-md border bg-white p-6 shadow-lg'>
            {/* Step 1 */}
            {
                currentStep === 1 && (
                    <div className="mb-8">
                        <h2 className='mb-4 text-2xl font-bold'>Step: 1 Login and password</h2>
                        <label className='mb-4'>
                            Login must be entered in lowercase - required field
                            <input type="text" name='login' value={formData.login} onChange={(e) => setFormData({ ...formData, login: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200 mt-3" placeholder="Enter login lowercase" required />
                        </label>
                        <label className='mb-4'>
                            <p className='mt-5 mb-2'>Password must be longer than 5 symbols - required field</p>
                            <input type="password" name='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200" placeholder="Enter password" required />
                        </label>
                    </div>
                )
            }

            {
                currentStep === 2 && (
                    <div className="mb-8">
                        <h2 className='text-2xl font-bold mb-4'>Step 2 subscription type</h2>
                        <label className='mb-4 block'>
                            <p className='mb-3'>Subscription type</p>
                            <select name="subscriptionType" value={formData.subscription} onChange={(e) => setFormData({ ...formData, subscription: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200 capitalize" placeholder="subscription" required>
                                <option value="">Choose an option</option>
                                <option value="free">free</option>
                                <option value="monthly">monthly</option>
                                <option value="yearly">yearly</option>
                            </select>
                        </label>
                    </div>
                )
            }

            {
                currentStep === 3 && (
                    <div className="mb-8">
                        <h2 className='mb-4 text-2xl font-bold'>step 3 personal information</h2>
                        <label className='mb-4 block'>
                            <p className='mb-3 capitalize'>firstName</p>
                            <input type="text" name='firstName' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200" placeholder="first name" required />
                        </label>
                        <label className='mb-4 block'>
                            <p className='mb-3 capitalize'>lastname</p>
                            <input type="text" name='lastName' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500v focus:outline-none focus:ring-purple-200" placeholder="last name" required />
                        </label>
                        <label className='mb-4 block'>
                            <p className='mb-3 capitalize'>middle name</p>
                            <input type="text" name='middleName' value={formData.middleName} onChange={(e) => setFormData({ ...formData, middleName: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200" placeholder="middle name" required />
                        </label>
                        <label className='mb-4 block'>
                            <p className='mb-3 capitalize'>birthdate</p>
                            <input type="date" name='birthdate' value={formData.birthdate} onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200" placeholder="birthdate" required />
                        </label>
                        <label>
                            <p className='mb-3 capitalize'>email</p>
                            <input type="text" name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-md border px-4 py-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200" placeholder="email" required />
                        </label>
                        <label>
                            <p className='mb-3 capitalize'>gender</p>
                            <select name="gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="mt-4" required>
                                <option value="">select</option>
                                <option value="Male">Male</option>
                                <option value="female">female</option>
                            </select>
                        </label>
                    </div>
                )
            }


            {
                currentStep === 4 && (
                    <div className="mb-8">
                        <h2 className='mb-4 text-2xl font-bold capitalize'>step 4: credit card</h2>
                        <Cleave
                            placeholder='Enter your credit card number'
                            name='cardNumber'
                            value={formData.cardNumber}
                            options={{ creditCard: true, onCreditCardTypeChanged: hanleCreditCardTypedChanged }}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                            className="w-full rounded-md border px-4 py-4 mb-4 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring-purple-200"
                        />
                        {
                            creditCardType !== null && (
                                <div>
                                    <p>{creditCardType}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {
                currentStep === 5 && (
                    <div className="mb-8">
                        <h2 className='mb-4 text-2xl font-bold'>step 5: consent  and agreement (required)</h2>
                        <label>
                            consent  to presonal data proccesing (required)
                            <input type="checkbox" name='consentToProccesng' value={formData.consentToProccesng} onChange={(e) => setFormData({ ...formData, consentToProccesng: e.target.checked })} className="mr-2" required />
                            i agree to the proccesing of my presonal data
                        </label>
                        <label>
                            site uses Cookie Agreement (required)
                            <input type="checkbox" name='cookieArgiment' value={formData.cookieArgiment} onChange={(e) => setFormData({ ...formData, cookieArgiment: e.target.checked })} className="mr-2" required />
                            i agree to the sites use of cookies
                        </label>
                    </div>
                )
            }

            {
                currentStep === 6 && (
                    <div className="mb-8">
                        <h2 className='mb-4 text-2xl font-bold capitalize'>step 6: rewview  or information </h2>
                        <div className="rounded-md p-4">
                            <p className='mb-2 text-xl capitalize'>
                                <strong>Login: </strong>{formData.login}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>password: </strong>{formData.password}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>subscription: </strong>{formData.subscription}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>first name: </strong>{formData.firstName}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>lastName: </strong>{formData.lastName}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>middle name: </strong>{formData.middleName}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>birthdate: </strong>{formData.birthdate}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>email: </strong>{formData.email}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>gender: </strong>{formData.gender}
                            </p>
                            <p className='mb-2 text-xl capitalize'>
                                <strong>cardNumber:     </strong>{formData.cardNumber}
                            </p>
                        </div>
                    </div>
                )
            }

            {/* navigation buttons */}
            <div className="flex justify-between">
                {
                    currentStep !== 1 && (
                        <button type='button' onClick={handlePrevStep} className='text-white rounded-md bg-purple-500 hover:bg-purple-600 focus:outline-none w-[100px] h-[40px] capitalize'>
                            previous
                        </button>
                    )
                }
                {
                    currentStep !== 6 ? (
                        <button type='button' onClick={handeNextStep} className='text-white rounded-md bg-purple-500 hover:bg-purple-600 focus:outline-none  w-[100px] h-[40px] capitalize'>
                            next
                        </button>
                    ) : (
                        <div>
                          
                        </div>
                    )
                }
            </div>
        </div >
    );

}

export default YourFormComponent
