-- CreateTable
CREATE TABLE "fields" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "name" SERIAL NOT NULL,
    "type_id" INTEGER NOT NULL,

    CONSTRAINT "fields_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "places_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_fk0" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_fk1" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
