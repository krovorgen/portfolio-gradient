import React, { ChangeEvent, FC, useState } from 'react';
import emailjs from 'emailjs-com';

import Image from 'next/image';
import Loader from '../../../assets/loader.svg';
import { Input } from '@/components/atoms/Input';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Button } from '@/components/atoms/Button';

import styles from './style.module.scss';

export const Cooperation: FC = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [telValue, setTelValue] = useState<string>('');
  const [successDispatch, setSuccessDispatch] = useState<boolean>(false);
  const [sentMessageStatus, setSentMessageStatus] = useState<boolean>(false);

  const nameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value);
  };

  const telInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTelValue(e.currentTarget.value);
  };

  function sendEmail(e) {
    e.preventDefault();
    setSentMessageStatus(true);
    emailjs
      .sendForm('service_cpcizsq', 'template_wnz3eom', e.target, 'user_gWCo2gs7F5k0IT2jPNOkQ')
      .then(
        () => {
          setNameValue('');
          setTelValue('');
          setSentMessageStatus(false);
          setSuccessDispatch(true);
          setTimeout(() => {
            setSuccessDispatch(false);
          }, 3000);
        },
        () => {}
      );
  }
  return (
    <div className={styles['cooperation']} id={'cooperation'}>
      <div className="container container--mini">
        <Title addClass={styles['cooperation__title']} tag={'h3'}>
          COOPERATION
        </Title>
        <div className={styles['cooperation__wrap']}>
          <div className={styles['cooperation__info']}>
            <Paragraph addClass={styles['cooperation__text']}>
              If you are interested in cooperation, please fill out the form and I will contact you
              to discuss the details.
            </Paragraph>
            <form className={styles['cooperation__form']} onSubmit={sendEmail}>
              <Input
                addClass={styles['cooperation__input']}
                type="text"
                name="name"
                placeholder="Your name"
                value={nameValue}
                onChange={nameInputHandler}
                complete={successDispatch}
                required
              />
              <Input
                addClass={styles['cooperation__input']}
                type="tel"
                name="phone"
                placeholder="your mobile phone"
                value={telValue}
                onChange={telInputHandler}
                complete={successDispatch}
                required
              />
              <div className={styles['cooperation__box']}>
                <Button
                  addClass={styles['cooperation__button']}
                  disabled={sentMessageStatus}
                  type={'submit'}
                  size={'sm'}
                >
                  Contact Us
                </Button>
                {sentMessageStatus && <Loader className={styles['cooperation__loader']} />}
              </div>
            </form>
          </div>
          <div className={styles['cooperation__images']}>
            <Image
              className={styles['cooperation__img']}
              src={'/images/cooperation-bg.jpg'}
              width={692}
              height={533}
              alt={'Slider image'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
