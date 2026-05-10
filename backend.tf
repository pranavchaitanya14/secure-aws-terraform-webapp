terraform {
  backend "s3" {
    bucket         = "secureinfra-terraform-state-308116825689-ap-south-1-an"
    key            = "dev/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}