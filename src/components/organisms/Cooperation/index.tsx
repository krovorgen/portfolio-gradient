import React, { ChangeEvent, FC, useState } from 'react';
import emailjs from 'emailjs-com';

import { Button, Paragraph } from '@/components/index';
import Image from 'next/image';
import Loader from '../../../assets/loader.svg';
import { Input } from '@/components/atoms/Input';
import { Title } from '@/components/atoms/Title';

import styles from './style.module.scss';

const Cooperation: FC = () => {
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
          Сотрудничество
        </Title>
        <div className={styles['cooperation__wrap']}>
          <div className={styles['cooperation__info']}>
            <Paragraph addClass={styles['cooperation__text']}>
              Если вас интересует сотрудничество, заполните, пожалуйста, форму и&nbsp;я&nbsp;свяжусь
              с&nbsp;вами для обсуждения деталей.
            </Paragraph>
            <form className={styles['cooperation__form']} onSubmit={sendEmail}>
              <Input
                addClass={styles['cooperation__input']}
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={nameValue}
                onChange={nameInputHandler}
                complete={successDispatch}
                required
              />
              <Input
                addClass={styles['cooperation__input']}
                type="tel"
                name="phone"
                placeholder="Ваш номер телефона"
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
                  Связаться
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

export default Cooperation;
