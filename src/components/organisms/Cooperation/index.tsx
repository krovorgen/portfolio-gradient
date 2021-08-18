import React, { FC } from 'react';
import emailjs from 'emailjs-com';

import { Button, Input, Paragraph, Title } from '@/components/index';

import styles from './style.module.scss';

const Cooperation: FC = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_cpcizsq', 'template_wnz3eom', e.target, 'user_gWCo2gs7F5k0IT2jPNOkQ')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className={styles['cooperation']}>
      <div className="container">
        <Title addClass={styles['cooperation__title']} tag={'h3'}>
          Сотрудничество
        </Title>
        <div className={styles['cooperation__wrap']}>
          <Paragraph addClass={styles['cooperation__text']}>
            Если вас интересует сотрудничество, заполните, пожалуйста, форму и я свяжусь с вами для
            обсуждения деталей.
          </Paragraph>
          <form className={styles['cooperation__form']} onSubmit={sendEmail}>
            <Input
              addClass={styles['cooperation__input']}
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
            />
            <Input
              addClass={styles['cooperation__input']}
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона"
              required
            />
            <Button addClass={styles['cooperation__button']} type={'submit'} size={'sm'}>
              Связаться
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
