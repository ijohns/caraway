import './App.css';
import { 
  Card, 
  CardImage, 
  CardContent, 
  CardFooter
} from './components/Card';

import {
  Section
} from './components/Section';

import {Button} from './components/Button';
import InfoIcon from './components/Info';


function App() {
  return (
    <>
      <Section className="section lime">
        <div className="container">
          <div>
            <Button className="btn">Add to Cart</Button>
          </div>
        </div>
      </Section>

      <Section className="section bg">
        <div className="container">
          <div className="product-cards">
            <Card className="card card-yellow">
              <CardImage className="card-image">
                <img src="/shower-bg.jpg" alt="Shower Foam" className="product-image" />
                <img src="/shower-product.png" alt="Shower Foam" className="product-image card-image-2" />
              </CardImage>
              <CardContent className="card-body">
                <h2>Shower Foam</h2>
                <p className="subtitle">Motivation and focus*</p>
                <p><strong>Key Ingredients:</strong> Warm Sugar, Vanilla, Fresh Pancakes</p>
              </CardContent>
              <CardFooter className="card-footer actions">
                <Button className="btn-outline btn-w-line">
                  <span>Add to cart</span> <hr /> <span>$50.00</span>
                </Button>
                <Button className="subscribe btn-w-line">
                  <InfoIcon className="icon" />
                  <span>Subscribe</span> <hr /> <span>$42.50</span>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card card-blue">
              <CardImage className="card-image">
                <img src="/foam-bg.jpg" alt="Shower Foam" className="product-image" />
                <img src="/foam-product.png" alt="Shower Foam" className="product-image card-image-2" />
              </CardImage>
              <CardContent className="card-body">
                <h2>Sea Foam</h2>
                <p className="subtitle">Connection and joy*</p>
                <p><strong>Key Ingredients:</strong> Sea Salt, Beach Water, Fresh Coconut, Sprinkles</p>
              </CardContent>
              <CardFooter className="card-footer actions">
                <Button className="btn-outline btn-w-line">
                  <span>Add to cart</span> <hr /> <span>$50.00</span>
                </Button>
                <Button className="subscribe btn-w-line">
                  <InfoIcon className="icon" />
                  <span>Subscribe</span> <hr /> <span>$42.50</span>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card card-pink">
              <CardImage className="card-image">
                <img src="/fluffy-bg.jpg" alt="Shower Foam" className="product-image" />
                <img src="/fluffy-product.png" alt="Shower Foam" className="product-image card-image-2" />
              </CardImage>
              <CardContent className="card-body">
                <h2>Sweet Fluffy</h2>
                <p className="subtitle">Deep, restorative sleep*</p>
                <p><strong>Key Ingredients:</strong> Fresh Berries, Rainbow Sprinkles, Fairy Floss</p>
              </CardContent>
              <CardFooter className="card-footer actions">
                <Button className="btn-outline btn-w-line">
                  <span>Add to cart</span> <hr /> <span>$50.00</span>
                </Button>
                <Button className="subscribe btn-w-line">
                  <InfoIcon className="icon" />
                  <span>Subscribe</span> <hr /> <span>$42.50</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;
