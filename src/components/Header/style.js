import styled from "styled-components";

export const HeaderTop = styled.div`
    padding: 5px 0px;
    background-color: rgb(231, 231, 231);

    .header__top--inner {
        display:flex;
        align-items:center;
    
    }
    // Header Top left start

    .header__top--left {
        display: flex;
        align-items:center;
        gap:30px;

     &-btn {
        border:none;
        background: transparent;
        display:flex;
        align-items:center;
        gap: 5px;
        
        }

  

        &-description span {
            font-weight:bold;
            text-decoration: underline;
        }
 
    }

    // Header Top left end

    // 
 
    // Header Top right start
        .header__top--right {
            display:flex;
            align-items:center;
            gap:15px;
            margin-left:auto;

            a {
                transition: color .3s ease ;
                &:hover {
                    color:dimgray;
                    transition: color .3s ease ;
                }
            }

            &-link {
            color:blue;
            text-decoration: underline;
            }

            form select  {
            outline:none;
            background: transparent;
            border:none;
            transition: border .3s ease ;
            

            &:hover {
                border:1px solid #222;
                transition: border .3s ease;
                cursor: pointer;
            }
            }
        }
    // Header Top right end

   
`


export const HeaderMid = styled.div``
export const Navbar = styled.nav``