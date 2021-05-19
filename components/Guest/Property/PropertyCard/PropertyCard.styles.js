import styled from "styled-components";

const PropertyCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0;
  max-width: 400px;
  min-height: 450px;
  width: calc(100% - 20px);
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;

  .property-card-image-wrapper {
    position: relative;
    margin: 0;
    width: 100%;
    padding-top: 66.67%;
    background-color: #ebedef;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;

    .card-title-wrapper {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 10px;
      width: 90%;
      padding: 12px;
      text-align: center;
      display: flex;
      background: rgba(0, 0, 0, 0.25);
      //filter: blur(1px);

      h4 {
        font-weight: bold;
        margin: 0 auto;
        line-height: 32px;
        color: #fff !important;
      }
    }
  }

  .property-card-content {
    display: flex;
    flex-direction: column;
    padding: 24px 24px 32px;
    flex-grow: 1;

    .features-wrapper {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          font-size: 0.9rem;
          margin: 0.75rem 0;

          svg {
            font-size: 1rem;
            color: #cbcbcb;
            margin-right: 2px;
          }
        }

        li:nth-child(even) {
          flex: 0 0 50%;
        }

        li:nth-child(odd) {
          flex: 0 0 50%;
        }
      }
    }

    .price-wrapper {
      margin-top: auto;
      padding: 8px 0 8px;
      text-align: center;

      h4 {
        margin: 8px auto;
        padding: 0;
        color: #e8c36a;
        font-family: Raleway, sans-serif;
        font-weight: normal;
        font-size: 1.125rem;

        span {
          color: #3c4b64;
          margin: 0;
        }
      }
    }

    .property-buttons-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        min-width: 120px;
        padding: 0 16px;
        span {
          font-size: 14px;
        }
      }
    }
  }

  &:hover .overlay {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    .property-card-image-wrapper {
      padding-top: 200px;

      .card-title-wrapper {
        h4 {
          font-size: 1.25rem;
        }
      }
    }

    .property-card-content {
      .features-wrapper {
        ul {
          li {
            flex: 0 0 100% !important;
          }
        }
      }

      .property-buttons-wrapper {
        .btn {
          min-width: auto !important;
          padding: 4px;
        }

        //flex-direction: column;
        //
        //.btn:nth-child(1) {
        //    margin-bottom: 20px;
        //    min-width: 8rem;
        //}
      }
    }
  }
`;

export default PropertyCardWrapper;
