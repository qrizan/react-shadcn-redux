import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

interface INotificationAlertProps {
  title: string,
  description: string
}

export default function NotificationAlert(props: INotificationAlertProps) {
  const { title, description } = props;

  return (
    <Alert>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )

}