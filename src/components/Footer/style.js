import styled from "styled-components";

export const FooterWrapper = styled.div`
    h4 {
        font-size: 14px;
    }
    .footer__top  {
        display: flex;
        margin-bottom: 75px;
        


           &--left-list,  &--right-bottom--wrapper-list, &--right-top--wrapper  {
            display: flex;
            align-items:center;
    }



    &--right-top--wrapper {
          display: flex;
            align-items:center;
            margin-bottom: 50px;
    }

   &--right-top--wrapper {
   gap: 20px;
   }

    &--right-heading {
        margin-bottom: 20px;
    }

    &--right-bottom--wrapper {

    h4 {
        margin-bottom: 10px;
    }
    }

   
        &--left-list {
            gap: 204px;
        }

        &--left-item {
            h4 {
                margin-bottom: 16px;
            }

            a, button  {
                font-size: 12px;
                color: dimgray;
                display: block;
                margin-bottom: 20px;
            }

            button {
                border: none;
                background: transparent;
            }
        }

    &--right-bottom--wrapper-list {
    gap: 12px;
    }
        .footer__top--right {
            margin-left: auto;
            &
        }
    }


    .footer__bottom {
        display: flex;
        align-items:center;
        padding: 20px 0px;
        position: relative;


        &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 1px;
            background: dimgray;
            border-radius: 2px;
            border-width: 1px;

        }

        &--left{
                display: flex;
                align-items:center;
                gap: 20px;
        }

        &--right {
        font-size: 10px;
        margin-left: auto;
        color: dimgray;
        }
    }
 
`