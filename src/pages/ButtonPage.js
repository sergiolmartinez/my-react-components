import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <div>
          <Button primary onClick={handleClick}>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoCloudDownload />
            Secondary
          </Button>
        </div>
        <div>
          <Button success>
            <GoDatabase />
            Success
          </Button>
        </div>
        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button danger>Danger</Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}
